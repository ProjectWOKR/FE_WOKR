import React, { useEffect, useState, useRef } from 'react';
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

const TodoModal = ({
  onCloseTodoModal,
  todoModalRef,
  todoModalOutSideClick,
}) => {
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
  const format = 'YYYY-MM-DD';

  // 모달 스크롤 방지
  useEffect(() => {
    // 현재 위치에 고정시킴
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      // 모달이 false면 style을  지우고 원래 있던 위치로 돌려주기
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      //-숫자px 형식으로나와서 파싱 후 음수를 정수로 바꾸기 위해 *-1
      window.scrollTo(0, parseInt(scrollY, 10) * -1);
    };
  }, []);

  const [todoInfo, setTodoInfo] = useState({
    toDo: '',
    memo: '',
    priority: '',
    startDate: '',
    endDate: '',
    okr: '',
    // display: '',
  });

  const [startDate, setStartDate] = useState({ format: 'MM/DD/YYYY' });
  const [endDate, setEndDate] = useState({ format: 'MM/DD/YYYY' });

  //startDate 변환 함수
  const convertStart = (date, format = startDate.format) => {
    let object = { date, format };
    setStartDate(new DateObject(object).format());
    setTodoInfo({ ...todoInfo, startDate: new DateObject(object).format() });
  };

  //endDate 변환 함수
  const convertEnd = (date, format = startDate.format) => {
    let object = { date, format };
    setEndDate(new DateObject(object).format());
    setTodoInfo({ ...todoInfo, endDate: new DateObject(object).format() });
  };

  // 시간 포함 토글
  const [startWithTime, setStartWithTime] = useState(false);
  const [endWithTime, setEndWithTime] = useState(false);

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

  const submitBtn = () => {
    console.log(todoInfo);
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
            <OkrDropDown todoInfo={todoInfo} setTodoInfo={setTodoInfo} />
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
              placeholder='To Do 내용을 작성하세요'
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
                  format={format}
                  placeholder='시작일'
                  value={startDate.date}
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
                  value={startDate.date}
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
              )}

              {!endWithTime ? (
                <DatePicker
                  inputClass='end-input'
                  containerClassName='end-container'
                  months={months}
                  weekDays={weekDays}
                  format={format}
                  placeholder='종료일'
                  value={endDate.date}
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
                  plugins={[<TimePicker position='bottom' />]}
                  placeholder='종료일'
                  value={endDate.date}
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
          <button className='next' onClick={submitBtn}>
            저장
          </button>
        </div>
      </ModalBox>
    </div>
  );
};

export default TodoModal;
