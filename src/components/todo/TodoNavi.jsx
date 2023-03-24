import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import { DateNavi, StNavi, TodoHeader } from './tododetail.styled';

const TodoNavi = () => {
  // console.log(dateId);
  // console.log(func);
  const today = new Date();
  const yearMonth = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;

  let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let makeWeekAll = date => {
    let day = date.getDay();
    let week = [];

    for (let i = 0; i < 7; i++) {
      let newDate = new Date(date.valueOf() + 86400000 * (i - day));
      // let id = Math.random();
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
      // console.log(newDate);
      // console.log(newDate.getDate());
      let format = '';
      if (newDate.getMonth() + 1 < 10) {
        format = `0${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
      } else if (newDate.getDate() < 10) {
        format = `${newDate.getMonth() + 1}월 0${newDate.getDate()}일`;
      } else {
        format = `${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
      }
      week.push([
        dateValue,
        `${newDate.getMonth() + 1}`,
        `${newDate.getDate()}`,
        { format: format },
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

  // console.log(state);

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
          <React.Fragment key={index}>
            {Number(el[2]) === dateD && Number(el[1]) === dateM ? (
              <Link
                to={el[3].format}
                spy={true}
                smooth={true}
                offset={-500}
                className='day'
                style={{ border: '2px solid rgba(255, 131, 54,1)' }}>
                <span className='label'>{el[0]}</span>
                <span className='date' style={{ color: '#ff8336' }}>
                  {el[2]}
                </span>
              </Link>
            ) : (
              <Link
                className='day'
                to={el[3].format}
                spy={true}
                offset={-500}
                smooth={true}>
                <span className='label'>{el[0]}</span>
                <span className='date'>{el[2]}</span>
              </Link>
            )}
          </React.Fragment>
        ))}
      </DateNavi>
    </StNavi>
  );
};

export default TodoNavi;
