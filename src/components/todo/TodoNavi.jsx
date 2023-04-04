import plus from '../../assets/plus.png';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
import { DateNavi, NaviPlus, StNavi, TodoHeader } from './tododetail.styled';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

const TodoNavi = ({ todayFormat, getAllTodo }) => {
  // console.log(getAllTodo);
  // console.log(todayFormat);
  const today = new Date();
  const yearMonth = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;

  let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const [month, setMonth] = useState(today.getMonth() + 1);

  let makeWeekAll = date => {
    let day = date.getDay();
    let week = [];
    const haveDay = getAllTodo?.map(todo => {
      return todo.targetDate;
    });
    // console.log(haveDay);
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

      week.push([
        dateValue,
        `${newDate.getMonth() + 1}`,
        `${newDate.getDate()}`,
        { format: format },
        { includes: haveDay?.includes(format) },
      ]);

      // console.log(week);
    }
    return week;
  };

  let week = makeWeekAll(date);

  // console.log()

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

    newWeek.map(el => {
      if (el[1] === month) {
        setMonth(month);
      } else {
        setMonth(el[1]);
      }
      return el;
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
    newWeek.map(el => {
      if (el[1] === month) {
        setMonth(month);
      } else {
        setMonth(el[1]);
      }
      return el;
    });
  };

  const dateM = date.getMonth() + 1;
  const dateD = date.getDate();

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
  // console.log(state.week);

  return (
    <StNavi>
      <TodoHeader>
        <div className='left'>
          <div className='dDay'>
            {today.getFullYear()}년 {month}월
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
            {Number(el[2]) === dateD && Number(el[1]) === dateM ? (
              <Link
                to={el[3].format}
                spy={true}
                smooth={true}
                offset={-500}
                className={el[4].includes === false ? 'day' : 'include'}
                style={{ backgroundColor: ' rgba(255, 131, 54, 0.3)' }}>
                <span className='label'>{el[0]}</span>
                <span className='date' style={{ color: '#ff8336' }}>
                  {el[2]}
                </span>
                {el[4].includes === false ? null : (
                  <div className='includeCh'></div>
                )}
              </Link>
            ) : (
              <Link
                className={el[4].includes === false ? 'day' : 'include'}
                to={el[3].format}
                spy={true}
                offset={-500}
                smooth={true}>
                <span className='label'>{el[0]}</span>
                <span className='date'>{el[2]}</span>
                {el[4].includes === false ? null : (
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
