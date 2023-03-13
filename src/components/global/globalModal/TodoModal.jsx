import React, { useEffect, useState } from 'react';
import { ModalBackground, ModalBox, OKRBox } from './modal.styled';

import DatePicker, { DateObject } from 'react-multi-date-picker';
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
    todo: '',
    memo: '',
    dDay: '',
    priority: '',
  });

  const [startDate, setStartDate] = useState({ format: 'MM/DD/YYYY' });
  const [endDate, setEndDate] = useState({ format: 'MM/DD/YYYY' });

  //startDate 변환 함수
  const convertStart = (date, format = startDate.format) => {
    let object = { date, format };
    setStartDate(new DateObject(object).format());
    setTodoInfo({ ...todoInfo, startdate: new DateObject(object).format() });
  };

  //endDate 변환 함수
  const convertEnd = (date, format = startDate.format) => {
    let object = { date, format };
    setEndDate(new DateObject(object).format());
    setTodoInfo({ ...todoInfo, enddate: new DateObject(object).format() });
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
          <OkrDropDown />

          <div className='object itemBox'>
            <img src={todoOkr} alt='' />
            <input
              type='text'
              placeholder='To Do 내용을 작성하세요'
              className='input'
              name='todo'
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
                ]}
              />

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
                ]}
              />
            </div>
            <div className='colorBox'>
              <PriorityDropDown todoInfo={todoInfo} setTodoInfo={setTodoInfo} />
            </div>
          </div>
        </OKRBox>

        <div className='btnBox'>
          <button onClick={onCloseTodoModal} className='cancel'>
            취소
          </button>
          <button className='next'>저장</button>
        </div>
      </ModalBox>
    </div>
  );
};

export default TodoModal;
