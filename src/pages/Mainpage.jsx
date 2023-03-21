import React, { useState } from 'react';
import styled from 'styled-components';
// import Header from '../components/global/header/Header';
// import Menu from '../components/mainpage/Menu';
import DashBoardOKR from '../components/mainpage/OKR';
import DashBoardTodo from '../components/mainpage/ToDo';
import DashBoardCalendar from '../components/mainpage/Calendar';
import Todo from '../components/todo/todo';
import TeamOKR from '../components/teamOKR/TeamOKR';
import Calendar from '../components/calendar/Calendar';
import CompanyOKR from '../components/companyOKR/companyOKR';
// import { useRecoilValue } from 'recoil';
// import { NowState } from '../store/store';
// import { useNavigate } from 'react-router-dom';
import { MenuContainer, MenuItem } from './../components/mainpage/menu.styled';

export default function Mainpage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.accesstoken === undefined) {
  //     navigate('/');
  //   }
  // }, []);

  const menuList = ['Dashboard', 'All OKR', 'TEAM OKR', 'TO - DO', 'Calendar'];

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
  // console.log('now :', now);
  const clickNowPage = e => {
    // console.log(e.target.value);
    const { name } = e.target;
    setNow(name);
  };

  return (
    <Wrap>
      <MenuContainer>
        {menuList.map((text, i) => {
          return (
            <MenuItem
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
  max-width: 147.9rem;
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
