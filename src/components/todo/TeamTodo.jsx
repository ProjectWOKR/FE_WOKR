import { GetUser } from '../../apis/apiGET';
import badgeB from '../../assets/badgeB.png';
import {
  dateArray,
  teamArray,
  teamMemberAtom,
  todoDateInfo,
} from '../../store/store';
import { StTeam } from '../../styles/tododetail.styled';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const TeamTodo = () => {
  const setMember = useSetRecoilState(teamMemberAtom);
  // console.log('member --->', member);
  // const setTeamMemberAtom = useSetRecoilState(teamMemberAtom);

  const [info, setInfo] = useRecoilState(todoDateInfo);
  const [team, setTeam] = useRecoilState(dateArray);
  // console.log('team :', team);

  const { data: getMember } = useQuery(['MEMBER'], GetUser, {
    onSuccess: response => {
      // console.log(response);
      setMember(response);
    },
    onError: response => {},
  });

  const clickMember = e => {
    const id = Number(e.target.id);

    if (info.teamMembers.includes(id) === false) {
      setInfo({
        ...info,
        teamMembers: [...info.teamMembers, Number(e.target.id)],
      });
      setTeam({
        ...team,
        teamMembers: [...team.teamMembers, Number(e.target.id)],
      });
    } else if (
      info.teamMembers.includes(id) === true &&
      info.teamMembers.length > 1
    ) {
      const removeId = info.teamMembers.filter(el => el !== id);

      setInfo({
        ...info,
        teamMembers: removeId,
      });
      setTeam({
        ...team,
        teamMembers: removeId,
      });
    }
  };

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
      <div className='teamWrap'>
        <div className='title'>
          <img src={badgeB} alt='' />
          <div>나의 팀 To - Do 현황</div>
        </div>
        <div className='today'>{today}</div>

        {getMember?.map(el => (
          <div className='member' key={el.userId}>
            <div
              id={el.userId}
              className={
                info.teamMembers.includes(el.userId) === true ? 'have' : 'none'
              }
              onClick={clickMember}></div>
            {/* <div className='have'></div> */}
            <div className='name'>{el.name}</div>
            <div className='number'>{el.createToDoCount}</div>
          </div>
        ))}
      </div>
    </StTeam>
  );
};

export default TeamTodo;
