import React from 'react';
import { StTeam } from './tododetail.styled';
import badgeB from '../../assets/badgeB.png';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '../../apis/apiGET';

const TeamTodo = () => {
  const { data: getMember } = useQuery(['MEMBER'], GetUser, {
    onSuccess: response => {
      console.log('user :', response);
    },
    onError: response => {
      console.log(response);
    },
  });
  return (
    <StTeam>
      <div className='title'>
        <img src={badgeB} alt='' />
        <div>나의 팀 To - Do 현황</div>
      </div>
      <div className='today'>3월 6일 월요일</div>
      {getMember?.map(el => (
        <div className='member' key={el.userId}>
          <div className={el.myInfo === true ? 'have' : 'none'}></div>
          <div className='name'>{el.name}</div>
          <div className='number'>2</div>
        </div>
      ))}
    </StTeam>
  );
};

export default TeamTodo;
