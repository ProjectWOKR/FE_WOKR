import plus from '../../assets/plus.png';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
import { DateNavi, NaviPlus, StNavi, TodoHeader } from './tododetail.styled';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

const TodoNavi = ({ todayFormat, getAllTodo }) => {
  const haveDay = getAllTodo?.map(todo => {
    return todo.targetDate;
  });

  const today = new Date();

  let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let makeWeek = date => {
    let day = date.getDay();
    let week = [];

    for (let i = 0; i < 7; i++) {
      let newDate = new Date(date.valueOf() + 86400000 * (i - day));
      let dateValue;
      if (i === 0) {
        dateValue = '일';
      } else if (i === 1) {
        dateValue = '월';
      } else if (i === 2) {
        dateValue = '화';
      } else if (i === 3) {
        dateValue = '수';
      } else if (i === 4) {
        dateValue = '목';
      } else if (i === 5) {
        dateValue = '금';
      } else if (i === 6) {
        dateValue = '토';
      }

      let format = '';
      if (newDate.getMonth() + 1 < 10 && newDate.getDate() < 10) {
        format = `0${newDate.getMonth() + 1}월 0${newDate.getDate()}일`;
      } else if (newDate.getMonth() + 1 < 10) {
        format = `0${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
      } else if (newDate.getDate() < 10) {
        format = `${newDate.getMonth() + 1}월 0${newDate.getDate()}일`;
      } else {
        format = `${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
      }

      week.push({
        dateValue,
        month: `${newDate.getMonth() + 1}`,
        date: `${newDate.getDate()}`,
        year: `${newDate.getFullYear()}`,
        format: format,
        includes: haveDay?.includes(format),
      });
    }
    return week;
  };

  let week = makeWeek(date);

  const [state, setState] = useState({
    date,
    week,
  });

  const onPressArrowLeft = () => {
    let newDate = new Date(state.date.valueOf() - 86400000 * (7 * 1));
    let newWeek = makeWeek(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });
    console.log('newWeek :', newWeek);
  };

  const onPressArrowRight = () => {
    let newDate = new Date(state.date.valueOf() + 86400000 * (7 * 1));
    let newWeek = makeWeek(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });
  };

  const dateM = date.getMonth() + 1;
  // 오늘 날짜 값 추출하기
  const dateD = date.getDate();
  const dateY = date.getFullYear();

  const [todoModalOn, setTodoModalOn] = useState(false);
  /**모달 닫는 함수 */
  const onCloseTodoModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const createTodo = () => {
    setTodoModalOn(!todoModalOn);
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const todoModalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */
  const todoModalOutSideClick = e => {
    if (todoModalRef.current === e.target) {
      setTodoModalOn(!todoModalOn);
    }
  };

  console.log(state.week);

  return (
    <StNavi>
      <TodoHeader>
        <div className='left'>
          <div className='dDay'>
            {state.week[3].year}년 {state.week[3].month}월
          </div>
        </div>
        <div className='right'>
          <div className='prev' onClick={onPressArrowLeft} />
          <div className='next' onClick={onPressArrowRight} />
          <Link
            className='today'
            to={todayFormat}
            spy={true}
            smooth={true}
            offset={-500}>
            오늘
          </Link>
          <NaviPlus onClick={createTodo}>
            <img src={plus} alt='' />
          </NaviPlus>
        </div>
      </TodoHeader>
      <DateNavi>
        {state.week?.map((el, index) => (
          <React.Fragment key={index}>
            {Number(el.date) === dateD &&
            Number(el.month) === dateM &&
            Number(el.year) === dateY ? (
              <Link
                to={el.format}
                spy={true}
                smooth={true}
                offset={-500}
                className={el.includes === false ? 'day' : 'include'}
                style={{ backgroundColor: ' rgba(255, 131, 54, 0.3)' }}>
                <span className='label'>{el.dateValue}</span>
                <span className='date' style={{ color: '#ff8336' }}>
                  {el.date}
                </span>
                {el?.includes === false ? null : (
                  <div className='includeCh'></div>
                )}
              </Link>
            ) : (
              <Link
                className={el.includes === false ? 'day' : 'include'}
                to={el?.format}
                spy={true}
                offset={-500}
                smooth={true}>
                <span className='label'>{el?.dateValue}</span>
                <span className='date'>{el?.date}</span>
                {el.includes === false ? null : (
                  <div className='includeCh'></div>
                )}
              </Link>
            )}
          </React.Fragment>
        ))}
      </DateNavi>
      <Potal>
        {todoModalOn && (
          <TodoModal
            onCloseTodoModal={onCloseTodoModal}
            todoModalRef={todoModalRef}
            todoModalOutSideClick={todoModalOutSideClick}
          />
        )}
      </Potal>
    </StNavi>
  );
};

export default TodoNavi;
