import Calendar from '../components/calendar/Calendar';
import CompanyOKR from '../components/companyOKR/companyOKR';
import DashBoardCalendar from '../components/mainpage/Calendar';
import DashBoardOKR from '../components/mainpage/OKR';
import DashBoardTodo from '../components/mainpage/ToDo';
import TeamOKR from '../components/teamOKR/TeamOKR';
import Todo from '../components/todo/Todo';
import { MenuContainer, MenuItem } from './../components/mainpage/menu.styled';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Mainpage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.accesstoken === undefined) {
      navigate('/');
    }
  }, []);

  const menuList = ['Dashboard', 'All OKR', 'Team OKR', 'TO - DO', 'Calendar'];

  const selectComponent = {
    Dashboard: (
      <>
        <OkrContainer>
          <DashBoardOKR />
          <DashBoardTodo />
        </OkrContainer>
        <DashBoardCalendar />
      </>
    ),
    'All OKR': <CompanyOKR />,
    'TEAM OKR': <TeamOKR />,
    'TO - DO': <Todo />,
    Calendar: <Calendar />,
  };

  const [now, setNow] = useState('Dashboard');
  const clickNowPage = e => {
    const { name } = e.target;
    setNow(name);
  };

  return (
    <Wrap>
      <MenuContainer>
        {menuList.map((text, i) => {
          return (
            <MenuItem
              text={text}
              key={i}
              onClick={clickNowPage}
              name={text}
              className={text === now ? 'active' : ''}>
              {text}
            </MenuItem>
          );
        })}
      </MenuContainer>
      <MainContainer>{selectComponent[now]}</MainContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  /* background-color: pink; */
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 154rem;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  /* background-color: pink; */
`;

const OkrContainer = styled.div`
  width: 100%;
  display: flex;
  /* background-color: skyblue; */
`;
