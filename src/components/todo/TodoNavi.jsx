import plus from '../../assets/plus.png';
import {
  DateNavi,
  NaviPlus,
  StNavi,
  TodoHeader,
} from '../../styles/tododetail.styled';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';

const TodoNavi = ({ todayFormat, getAllTodo }) => {
  const haveDay = getAllTodo?.map(todo => {
    return todo.targetDate;
  });

  const today = new Date();

  let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let makeWeek = date => {
    //요일
    let day = date.getDay();
    let week = [];

    for (let i = 0; i < 7; i++) {
      // 24*60*60*1000
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
    let newDate = new Date(state.date.valueOf() - 86400000 * 7);
    let newWeek = makeWeek(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });
  };

  const onPressArrowRight = () => {
    let newDate = new Date(state.date.valueOf() + 86400000 * 7);
    let newWeek = makeWeek(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });
  };

  // 오늘 날짜 관련 값 추출
  const dateM = date.getMonth() + 1;
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
  const todoModalOutSideClick = e => {
    if (todoModalRef.current === e.target) {
      setTodoModalOn(!todoModalOn);
    }
  };

  const [dDay, setDDay] = useState(todayFormat);
  console.log(dDay);

  const clickDDay = e => {
    if (e.currentTarget.className === 'include') {
      setDDay(e.currentTarget.id);
    }
  };

  const Today = ({ el }) => {
    console.log(el.format === dDay);
    if (
      Number(el.date) === dateD &&
      Number(el.month) === dateM &&
      Number(el.year) === dateY
    ) {
      return (
        <span className='date' style={{ color: '#ff8336' }}>
          {el.date}
        </span>
      );
    } else {
      return (
        <span className='date' style={{ color: '#4b4b4b' }}>
          {el.date}
        </span>
      );
    }
  };

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
          <div className='today'>오늘</div>
          <NaviPlus onClick={createTodo}>
            <img src={plus} alt='' />
          </NaviPlus>
        </div>
      </TodoHeader>
      <DateNavi>
        {state.week?.map((el, index) => (
          <React.Fragment key={index}>
            {el.format === dDay ? (
              <div
                onClick={clickDDay}
                id={el.format}
                style={{ border: '2px solid rgb(255,131,54)' }}
                className={el.includes === false ? 'day' : 'include'}>
                <span className='label'>{el.dateValue}</span>
                <Today el={el} />
                {el?.includes === false ? null : (
                  <div className='includeCh'></div>
                )}
              </div>
            ) : (
              <div
                onClick={clickDDay}
                id={el.format}
                className={el.includes === false ? 'day' : 'include'}>
                <span className='label'>{el.dateValue}</span>
                <Today el={el} />
                {el?.includes === false ? null : (
                  <div className='includeCh'></div>
                )}
              </div>
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
