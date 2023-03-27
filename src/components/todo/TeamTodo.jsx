import React from 'react';
import { StTeam } from './tododetail.styled';
import badgeB from '../../assets/badgeB.png';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '../../apis/apiGET';

const TeamTodo = () => {
  const { data: getMember } = useQuery(['MEMBER'], GetUser, {
    onSuccess: response => {
      // console.log('user :', response);
    },
    onError: response => {
      // console.log(response);
    },
  });

  const defaultDay = new Date().getDay();
  let day;
  if (defaultDay === 0) {
    day = '일요일';
  } else if (defaultDay === 1) {
    day = '월요일';
  } else if (defaultDay === 2) {
    day = '화요일';
  } else if (defaultDay === 3) {
    day = '수요일';
  } else if (defaultDay === 4) {
    day = '목요일';
  } else if (defaultDay === 5) {
    day = '금요일';
  } else if (defaultDay === 6) {
    day = '토요일';
  }

  const today = `${
    new Date().getMonth() + 1
  }월 ${new Date().getDate()}일 ${day}`;
  return (
    <StTeam>
      <div className='title'>
        <img src={badgeB} alt='' />
        <div>나의 팀 To - Do 현황</div>
      </div>
      <div className='today'>{today}</div>
      {getMember?.map(el => (
        <div className='member' key={el.userId}>
          <div className={el.myInfo === true ? 'have' : 'none'}></div>
          <div className='name'>{el.name}</div>
          <div className='number'>{el.createToDoCount}</div>
        </div>
      ))}
    </StTeam>
  );
};

export default TeamTodo;
