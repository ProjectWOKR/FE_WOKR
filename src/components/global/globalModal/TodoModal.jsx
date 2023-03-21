import React, { useEffect, useState } from 'react';
import {
  ModalBackground,
  ModalBox,
  OKRBox,
  ToggleContainer,
} from './modal.styled';

import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';

import close from '../../../assets/close.png';
import todoOkr from '../../../assets/todoOKR.png';
import todo from '../../../assets/todoTODO.png';
import memo from '../../../assets/memo.png';
import calender from '../../../assets/calender.png';
import { OnChange } from '../onChange';
import OkrDropDown from '../globaldropdown/OkrDropDown';
import PriorityDropDown from '../globaldropdown/PriorityDropDown';
import { useRecoilState } from 'recoil';
import { ToggleEndState, ToggleStartState } from '../../../store/store';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CreateTodo } from '../../../apis/apiPOST';
import { toast } from 'react-toastify';
import Toast from '../Toast';
import { GetOKR } from '../../../apis/apiGET';

const TodoModal = ({
  onCloseTodoModal,
  todoModalRef,
  todoModalOutSideClick,
}) => {
  const queryClient = useQueryClient();

  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  // 모달 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY, 10) * -1);
    };
  }, []);

  const [todoInfo, setTodoInfo] = useState({
    toDo: '',
    memo: '',
    startDate: '',
    startDateTime: '',
    endDate: '',
    endDateTime: '',
    priority: '',
  });

  // 포맷
  const [timeFormat, setTimeFormat] = useState({ format: 'YYYY-MM-DD HH:mm' });
  const [defaultFormat, setDefaultFormat] = useState({ format: 'YYYY-MM-DD' });

  // 시간 포함 토글
  const [startWithTime, setStartWithTime] = useState(false);
  const [endWithTime, setEndWithTime] = useState(false);

  //startDate 변환 함수 년-월
  const convertStart = (date, format = defaultFormat.format) => {
    let object = { date, format };
    setDefaultFormat(new DateObject(object).format());

    setTodoInfo({
      ...todoInfo,
      startDate: new DateObject(object).format(),
      startDateTime: '00:00',
    });
  };

  //endDate 변환 함수 년-월
  const convertEnd = (date, format = defaultFormat.format) => {
    let object = { date, format };
    setDefaultFormat(new DateObject(object).format());

    setTodoInfo({
      ...todoInfo,
      endDate: new DateObject(object).format(),
      endDateTime: '00:00',
    });
  };

  // startDateWithTime 변환 함수 년, 월 시:분
  const convertStartWithTime = (date, format = timeFormat.format) => {
    let object = { date, format };
    console.log(new DateObject(object).format());
    setTimeFormat(new DateObject(object).format());
    console.log('start :', new DateObject(object).format());

    setTodoInfo({
      ...todoInfo,
      startDate: new DateObject(object).format().split(' ')[0],
      startDateTime: new DateObject(object).format().split(' ')[1],
    });
  };

  // endDateWithTime 변환 함수 년, 월 시:분
  const convertEndWithTime = (date, format = timeFormat.format) => {
    let object = { date, format };
    // console.log(object);
    setTimeFormat(new DateObject(object).format());
    console.log(new DateObject(object).format());
    setTodoInfo({
      ...todoInfo,
      endDate: new DateObject(object).format().split(' ')[0],
      endDateTime: new DateObject(object).format().split(' ')[1],
    });
  };

  const [isStartOn, setIsStartOn] = useRecoilState(ToggleStartState);
  const [isEndOn, setIsEndOn] = useRecoilState(ToggleEndState);

  const startHandler = () => {
    setIsStartOn(!isStartOn);
    setStartWithTime(!startWithTime);
  };

  const endHandler = () => {
    setIsEndOn(!isEndOn);
    setEndWithTime(!endWithTime);
  };

  const { mutate: createTodo } = useMutation(CreateTodo, {
    onSuccess: response => {
      queryClient.invalidateQueries(['TODO']);
      // console.log(response);
    },
    onError: response => {},
  });

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {
      // console.log('df');
      // console.log(response);
    },
    onError: response => {},
  });

  const [oid, setOid] = useState(0);
  const [kid, setKid] = useState(0);

  // 저장 버튼 누르면 생성
  const createT = () => {
    const startd = new Date(todoInfo.startDate);
    const endd = new Date(todoInfo.endDate);

    if (todoInfo.startDate.length === 10) {
      setTodoInfo({ ...todoInfo, startDateTime: '00:00' });
    }

    if (todoInfo.toDo === '') {
      return toast('To Do는 필수 입니다.');
    } else if (todoInfo.toDo.length > 30) {
      return toast('To Do는 30글자 미만이어야합니다.');
    } else if (todoInfo.memo.length > 30) {
      return toast('메모는 30글자 미만이어야합니다.');
    } else if (todoInfo.startDate === '') {
      return toast('시작일을 설정해주세요.');
    } else if (todoInfo.endDate === '') {
      return toast('종료일을 설정해주세요.');
    } else if (endd < startd) {
      return toast('종료일은 시작일보다 빠르게 설정할 수 없습니다.');
    } else {
      let Oid = oid;
      let Kid = kid;
      let Info = todoInfo;
      createTodo({ Oid, Kid, Info });
      onCloseTodoModal();
    }
  };

  return (
    <div>
      <ModalBackground ref={todoModalRef} onClick={todoModalOutSideClick} />
      <ModalBox>
        <div className='header'>
          <h2>OKR 추가 - 목표, 기간, 색상</h2>
          <img src={close} alt='' onClick={onCloseTodoModal} />
        </div>
        <OKRBox>
          <div className='object itemBox'>
            <img src={todoOkr} alt='' />
            <OkrDropDown
              todoInfo={todoInfo}
              setTodoInfo={setTodoInfo}
              setKid={setKid}
              setOid={setOid}
            />
          </div>

          <div className='object itemBox'>
            <img src={todo} alt='' />
            <input
              type='text'
              placeholder='To Do 내용을 작성하세요'
              className='input'
              name='toDo'
              onChange={event => {
                OnChange(event, todoInfo, setTodoInfo);
              }}
            />
          </div>

          <div className='object itemBox'>
            <img src={memo} alt='' />
            <input
              type='text'
              placeholder='Momo 내용을 작성하세요'
              className='input'
              name='memo'
              onChange={event => {
                OnChange(event, todoInfo, setTodoInfo);
              }}
            />
          </div>

          <div className='date'>
            <img src={calender} alt='' />
            <div className='dateBox'>
              {!startWithTime ? (
                //시작시간이 false일 때
                <DatePicker
                  inputClass='start-input'
                  containerClassName='start-container'
                  months={months}
                  weekDays={weekDays}
                  format='YYYY-MM-DD'
                  placeholder='시작일'
                  value={defaultFormat.date}
                  onChange={convertStart}
                  animations={[
                    opacity(),
                    transition({
                      from: 40,
                      transition:
                        'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                    }),
                  ]}>
                  <div className='border' />
                  <div className='timeBox'>
                    <span>시간 포함</span>
                    <ToggleContainer onClick={startHandler}>
                      <div
                        className={`toggle-container ${
                          startWithTime ? 'toggle--checked' : null
                        }`}
                      />
                      <div
                        className={`toggle-circle ${
                          startWithTime ? 'toggle--checked' : null
                        }`}
                      />
                    </ToggleContainer>
                  </div>
                </DatePicker>
              ) : (
                //시작 시간이 true 일때 (시,분 나옴)
                <DatePicker
                  inputClass='start-input'
                  containerClassName='start-container'
                  months={months}
                  weekDays={weekDays}
                  format='YYYY-MM-DD HH:mm'
                  plugins={[<TimePicker position='bottom' hideSeconds />]}
                  placeholder='시작일'
                  value={timeFormat.date}
                  onChange={convertStartWithTime}
                  animations={[
                    opacity(),
                    transition({
                      from: 40,
                      transition:
                        'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                    }),
                  ]}>
                  <div className='border' />
                  <div className='timeBox'>
                    <span>시간 포함</span>
                    <ToggleContainer onClick={startHandler}>
                      <div
                        className={`toggle-container ${
                          startWithTime ? 'toggle--checked' : null
                        }`}
                      />
                      <div
                        className={`toggle-circle ${
                          startWithTime ? 'toggle--checked' : null
                        }`}
                      />
                    </ToggleContainer>
                  </div>
                </DatePicker>
              )}

              {!endWithTime ? (
                <DatePicker
                  inputClass='end-input'
                  containerClassName='end-container'
                  months={months}
                  weekDays={weekDays}
                  format='YYYY-MM-DD'
                  placeholder='종료일'
                  value={defaultFormat.date}
                  onChange={convertEnd}
                  animations={[
                    opacity(),
                    transition({
                      from: 40,
                      transition:
                        'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                    }),
                  ]}>
                  <div className='border' />
                  <div className='timeBox'>
                    <span>시간 포함</span>
                    <ToggleContainer onClick={endHandler}>
                      <div
                        className={`toggle-container ${
                          endWithTime ? 'toggle--checked' : null
                        }`}
                      />
                      <div
                        className={`toggle-circle ${
                          endWithTime ? 'toggle--checked' : null
                        }`}
                      />
                    </ToggleContainer>
                  </div>
                </DatePicker>
              ) : (
                <DatePicker
                  inputClass='end-input'
                  containerClassName={
                    !endWithTime ? 'end-container' : 'end-container-time'
                  }
                  months={months}
                  weekDays={weekDays}
                  format='YYYY-MM-DD HH:mm'
                  plugins={[<TimePicker position='bottom' hideSeconds />]}
                  placeholder='종료일'
                  value={timeFormat.date}
                  onChange={convertEndWithTime}
                  animations={[
                    opacity(),
                    transition({
                      from: 40,
                      transition:
                        'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                    }),
                  ]}>
                  <div className='border' />
                  <div className='timeBox'>
                    <span>시간 포함</span>
                    <ToggleContainer onClick={endHandler}>
                      <div
                        className={`toggle-container ${
                          endWithTime ? 'toggle--checked' : null
                        }`}
                      />
                      <div
                        className={`toggle-circle ${
                          endWithTime ? 'toggle--checked' : null
                        }`}
                      />
                    </ToggleContainer>
                  </div>
                </DatePicker>
              )}
            </div>
            <div className='priorityBox'>
              <PriorityDropDown todoInfo={todoInfo} setTodoInfo={setTodoInfo} />
            </div>
          </div>
        </OKRBox>

        <div className='btnBox'>
          <button onClick={onCloseTodoModal} className='cancel'>
            취소
          </button>
          <button className='next' onClick={createT}>
            저장
          </button>
        </div>
        <Toast />
      </ModalBox>
    </div>
  );
};

export default TodoModal;
