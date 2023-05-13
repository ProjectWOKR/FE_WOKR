import { PostWeek } from '../../apis/apiPOST';
import plus from '../../assets/plus.png';
import { dateArray, todayFormat, todoDateInfo } from '../../store/store';
import {
  DateNavi,
  NaviPlus,
  StNavi,
  TodoHeader,
} from '../../styles/tododetail.styled';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
import { useMutation } from '@tanstack/react-query';
import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const TodoNavi = () => {
  const todayFormatData = useRecoilValue(todayFormat);
  const [includeData, setIncludeData] = useState([]);

  const [dateInfo, setDateInfo] = useRecoilState(todoDateInfo);

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
      let format = '';

      if (newDate.getMonth() + 1 < 10 && newDate.getDate() < 10) {
        format = `${newDate.getFullYear()}-0${
          newDate.getMonth() + 1
        }-0${newDate.getDate()}`;
      } else if (newDate.getMonth() + 1 < 10) {
        format = `${newDate.getFullYear()}-0${
          newDate.getMonth() + 1
        }-${newDate.getDate()}`;
      } else if (newDate.getDate() < 10) {
        format = `${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-0${newDate.getDate()}`;
      } else {
        format = `${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-${newDate.getDate()}`;
      }

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

      week.push({
        dateValue,
        month: `${newDate.getMonth() + 1}`,
        date: `${newDate.getDate()}`,
        year: `${newDate.getFullYear()}`,
        format: format,
      });
    }
    return week;
  };

  let week = makeWeek(date);

  const [state, setState] = useState({
    date,
    week,
  });

  const [forData, setForData] = useRecoilState(dateArray);

  useEffect(() => {
    setForData({
      ...forData,
      Sunday: state.week[0].format,
      Saturday: state.week[6].format,
      teamMembers: dateInfo.teamMembers,
    });
  }, [state]);

  //include 백에게 요청
  const { mutate: weekDateInfo } = useMutation(PostWeek, {
    onSuccess: data => {
      setIncludeData(data);
    },
  });

  const onPressArrowLeft = () => {
    let newDate = new Date(state.date.valueOf() - 86400000 * 7);
    let newWeek = makeWeek(newDate);
    setState({
      ...state,
      date: newDate,
      week: newWeek,
    });

    setForData({
      ...forData,
      Sunday: newWeek[0].format,
      Saturday: newWeek[6].format,
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

    setForData({
      ...forData,
      Sunday: newWeek[0].format,
      Saturday: newWeek[6].format,
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

  // 날짜누르면 D-Day가 바뀌는 함수
  const [dDay, setDDay] = useState(todayFormatData);

  const clickDDay = e => {
    setDDay(e.currentTarget.id);
    setDateInfo({ ...dateInfo, targetDate: e.currentTarget.id });
    localStorage.setItem('targetDate', e.currentTarget.id);
  };

  useEffect(() => {
    if (forData.Sunday !== '' && forData.Saturday !== '') {
      weekDateInfo({ forData });
    }
  }, [weekDateInfo, forData]);

  const Today = ({ el }) => {
    if (
      Number(el.date) === dateD &&
      Number(el.month) === dateM &&
      Number(el.year) === dateY
    ) {
      return (
        <>
          <span className='label' style={{ color: '#ff8336' }}>
            {el.dateValue}
          </span>
          <span className='date' style={{ color: '#ff8336' }}>
            {el.date}
          </span>
        </>
      );
    } else {
      return (
        <>
          <span
            className='label'
            style={
              el.dateValue === '일'
                ? {
                    color: '#ff0000',
                  }
                : el.dateValue === '토'
                ? {
                    color: '#0000ff',
                  }
                : null
            }>
            {el.dateValue}
          </span>
          <span className='date' style={{ color: '#4b4b4b' }}>
            {el.date}
          </span>
        </>
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
                style={
                  el.dateValue === '일'
                    ? {
                        border: '2px solid rgb(255,131,54)',
                        borderRadius: '8px 0 0 8px',
                      }
                    : el.dateValue === '토'
                    ? {
                        border: '2px solid rgb(255,131,54)',
                        borderRadius: '0 8px 8px 0',
                      }
                    : { border: '2px solid rgb(255,131,54)' }
                }
                className={
                  includeData?.includes(el.format) === false ? 'day' : 'include'
                }>
                <Today el={el} />
                {includeData?.includes(el.format) === false ? null : (
                  <div className='includeCh'></div>
                )}
              </div>
            ) : (
              <div
                onClick={clickDDay}
                id={el.format}
                className={
                  includeData?.includes(el.format) === false ? 'day' : 'include'
                }>
                <Today el={el} />
                {includeData?.includes(el.format) === false ? null : (
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
