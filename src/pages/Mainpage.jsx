import { GetUserInfo } from '../apis/apiGET';
import Calendar from '../components/calendar/Calendar';
import CompanyOKR from '../components/companyOKR/companyOKR';
import Modal from '../components/global/globalModal/AlertModalTest';
import Portal from '../components/global/globalModal/Potal';
import DashBoardCalendar from '../components/mainpage/Calendar';
import DashBoardOKR from '../components/mainpage/OKR';
import DashBoardTodo from '../components/mainpage/ToDo';
import Tutorial from '../components/mainpage/Tutorial';
import TeamOKR from '../components/teamOKR/TeamOKR';
import Todo from '../components/todo/Todo';
import { accessTokenInfo } from '../store/store';
import { MenuContainer, MenuItem } from './../components/mainpage/menu.styled';
import { useQuery } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Mainpage() {
  const navigate = useNavigate();

  const [uid, setUid] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accesstoken')
  );

  useEffect(() => {
    const decodeToken = jwt_decode(accessToken);
    const extractedUid = decodeToken.userId;
    setUid(() => extractedUid);
  }, [accessToken]);

  const { data: userInfo } = useQuery(['userInfo'], () => GetUserInfo(uid), {
    enabled: !!uid,
  });

  useEffect(() => {
    if (localStorage.accesstoken === undefined) {
      navigate('/');
    }
  }, []);

  // const menuList = ['Dashboard', 'All OKR', 'Team OKR', 'TO - DO', 'Calendar'];

  const menuList = ['Dashboard', 'TO - DO'];

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
    // 'All OKR': <CompanyOKR />,
    // 'TEAM OKR': <TeamOKR />,
    'TO - DO': <Todo />,
    // Calendar: <Calendar />,
  };

  const [now, setNow] = useState('Dashboard');
  const clickNowPage = e => {
    const { name } = e.target;
    setNow(name);
  };

  return (
    <Wrap>
      {userInfo?.firstLogin ? (
        <Portal>
          <Tutorial />
        </Portal>
      ) : (
        <>
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
        </>
      )}
    </Wrap>
    // <Modal />
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
