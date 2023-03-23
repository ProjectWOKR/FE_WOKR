import React, { useEffect, useState } from 'react';
import DetailTodoItem from './DetailTodoItem';
import FinishTodo from './FinishTodo';
import PastTodo from './PastTodo';
import {
  DateNavi,
  DetailTodoWrap,
  StNavi,
  TodoHeader,
} from './tododetail.styled';

const TodoNavi = () => {
  const today = new Date();
  const yearMonth = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;

  let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let makeWeekAll = date => {
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
      week.push([
        dateValue,
        `${newDate.getMonth() + 1}`,
        `${newDate.getDate()}`,
      ]);
    }
    return week;
  };

  let week = makeWeekAll(date);

  const [state, setState] = useState({
    date,
    week,
  });

  const onPressArrowLeft = () => {
    let newDate = new Date(state.date.valueOf() - 86400000 * (7 * 1));
    let newWeek = makeWeekAll(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });
  };

  const onPressArrowRight = () => {
    let newDate = new Date(state.date.valueOf() + 86400000 * (7 * 1));
    let newWeek = makeWeekAll(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });
  };

  const dateM = date.getMonth() + 1;
  const dateD = date.getDate();

  return (
    <StNavi>
      <TodoHeader>
        <div className='left'>
          <div className='dDay'>{yearMonth}</div>
          <div className='down' />
        </div>
        <div className='right'>
          <div className='prev' onClick={onPressArrowLeft} />
          <div className='next' onClick={onPressArrowRight} />
          <div className='today'>오늘</div>
          <div className='more' />
        </div>
      </TodoHeader>
      <DateNavi>
        {state.week?.map((el, index) => (
          <>
            {Number(el[2]) === dateD && Number(el[1]) === dateM ? (
              <div
                className='day'
                key={el[0]}
                style={{ border: '2px solid rgba(255, 131, 54,1)' }}>
                <span className='label'>{el[0]}</span>
                <span className='date' style={{ color: '#ff8336' }}>
                  {el[2]}
                </span>
              </div>
            ) : (
              <div className='day' key={index}>
                <span className='label'>{el[0]}</span>
                <span className='date'>{el[2]}</span>
              </div>
            )}
          </>
        ))}
      </DateNavi>
    </StNavi>
  );
};

export default TodoNavi;
