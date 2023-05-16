import { GetOKR } from '../../../apis/apiGET';
import { CreateTodo } from '../../../apis/apiPOST';
import calender from '../../../assets/calender.png';
import close from '../../../assets/close.png';
import memo from '../../../assets/memo.png';
import todoOkr from '../../../assets/todoOKR.png';
import todo from '../../../assets/todoTODO.png';
import { ToggleEndState, ToggleStartState } from '../../../store/store';
import OkrDropDown from '../globaldropdown/OkrDropDown';
import PriorityDropDown from '../globaldropdown/PriorityDropDown';
import { OnChange } from '../onChange';
import {
  ModalBackground,
  ModalBox,
  OKRBox,
  TodoBox,
  ToggleContainer,
} from './modal.styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import opacity from 'react-element-popper/animations/opacity';
import transition from 'react-element-popper/animations/transition';
import ReactGA from 'react-ga4';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

const TodoModal = ({
  onCloseTodoModal,
  todoModalRef,
  todoModalOutSideClick,
  fromCalendar,
  dateInfo,
}) => {
  // console.log(dateInfo);
  useEffect(() => {
    const handleBeforeUnload = e => {
      e.preventDefault();
      e.returnValue =
        '현재 입력중인 항목이 있습니다. 정말 새로고침 하시겠습니까?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
    startDate: fromCalendar !== undefined ? dateInfo.start : '',
    startDateTime: fromCalendar !== undefined ? dateInfo.startDateTime : '',
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

  // console.log(todoInfo);

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
    setTimeFormat(new DateObject(object).format());

    setTodoInfo({
      ...todoInfo,
      startDate: new DateObject(object).format().split(' ')[0],
      startDateTime: new DateObject(object).format().split(' ')[1],
    });
  };

  // endDateWithTime 변환 함수 년, 월 시:분
  const convertEndWithTime = (date, format = timeFormat.format) => {
    let object = { date, format };
    setTimeFormat(new DateObject(object).format());
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
      console.log('생성됨');
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 생성',
        });
      }
      queryClient.invalidateQueries(['ToDo']);

      // queryClient.invalidateQueries(['ALLTODO']);
      // queryClient.invalidateQueries(['PASTTODO']);
      toast('TODO가 생성되었습니다.');
    },
    onError: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 생성 실패',
        });
      }
    },
  });

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {},
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
    } else if (todoInfo.toDo.length > 25) {
      return toast('To Do는 25글자 미만이어야합니다.');
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

  const onTodoOnchange = (event, state, setState) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <ModalBackground ref={todoModalRef} onClick={todoModalOutSideClick} />
      <ModalBox>
        <div className='header'>
          <h2>OKR 추가 - 목표, 기간, 색상</h2>
          <img src={close} alt='' onClick={onCloseTodoModal} />
        </div>
        <TodoBox>
          <div className='object itemBox'>
            <img src={todoOkr} alt='' />
            <OkrDropDown setKid={setKid} setOid={setOid} />
          </div>
          <div className='object itemBox'>
            <img src={todo} alt='' />
            <input
              type='text'
              placeholder='할 일을 작성해 주세요'
              className='input'
              name='toDo'
              maxLength='25'
              onChange={event => {
                onTodoOnchange(event, todoInfo, setTodoInfo);
              }}
            />
          </div>
          <div className='object itemBox'>
            <img src={memo} alt='' />
            <input
              type='text'
              placeholder='메모를 작성해 주세요'
              className='input'
              name='memo'
              onChange={event => {
                OnChange(event, todoInfo, setTodoInfo);
              }}
            />
          </div>

          {/* <textarea name='' id='' cols='310' rows='310'></textarea> */}
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
                  // value={defaultFormat.date}
                  value={
                    fromCalendar !== undefined
                      ? dateInfo.start
                      : defaultFormat.date
                  }
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
                  // value={timeFormat.date}
                  value={
                    fromCalendar !== undefined
                      ? dateInfo.start
                      : timeFormat.date
                  }
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
                  // value={
                  //   fromCalendar !== undefined
                  //     ? dateInfo.end
                  //     : defaultFormat.date
                  // }
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
                  // value={
                  //   fromCalendar !== undefined ? dateInfo.end : timeFormat.date
                  // }
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
        </TodoBox>

        <div className='btnBox'>
          <button onClick={onCloseTodoModal} className='cancel'>
            취소
          </button>
          <button className='next' onClick={createT}>
            저장
          </button>
        </div>
        {/* <Toast /> */}
      </ModalBox>
    </div>
  );
};

export default TodoModal;
