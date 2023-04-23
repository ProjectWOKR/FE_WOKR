import { Wrap } from '../';
import { GetUserInfo } from '../apis/apiGET';
import Calendar from '../components/calendar/Calendar';
import CompanyOKR from '../components/companyOKR/companyOKR';
import Modal from '../components/global/globalModal/AlertModalTest';
import Portal from '../components/global/globalModal/Potal';
import DashBoardCalendar from '../components/mainpage/Calendar';
import Menu from '../components/mainpage/Menu';
import DashBoardOKR from '../components/mainpage/OKR';
import DashBoardTodo from '../components/mainpage/ToDo';
import Tutorial from '../components/mainpage/Tutorial';
import TeamOKR from '../components/teamOKR/TeamOKR';
import Todo from '../components/todo/Todo';
import { accessTokenInfo } from '../store/store';
import { StMainPageWrap, StWrap } from '../styles/mainpage.styled';
import { MenuContainer, MenuItem } from './../components/mainpage/menu.styled';
import { useQuery } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Mainpage() {
  const navigate = useNavigate();
  // localStorage에 accesstoken 여부 확인
  useEffect(() => {
    // console.log(localStorage.accesstoken);
    if (localStorage.accesstoken === undefined) {
      navigate('/signin');
    }
  }, []);
  // const navigate = useNavigate();

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
      navigate('/signIn');
    }
  }, []);

  // const menuList = ['Dashboard', 'All OKR', 'Team OKR', 'TO - DO', 'Calendar'];

  const menuList = ['Dashboard', 'TO - DO'];

  // const selectComponent = {
  //   Dashboard: (
  //     <>
  //       <OkrContainer>
  //         <DashBoardOKR />
  //         <DashBoardTodo />
  //       </OkrContainer>
  //       <DashBoardCalendar />
  //     </>
  //   ),
  //   'TO - DO': <Todo />,
  // };

  const [now, setNow] = useState('Dashboard');
  const clickNowPage = e => {
    const { name } = e.target;
    setNow(name);
  };

  return (
    <StWrap>
      {userInfo?.firstLogin ? (
        <Portal>
          <Tutorial />
        </Portal>
      ) : (
        <>
          <aside>
            <Menu />
          </aside>

          <main>
            <OkrContainer>
              <DashBoardOKR />
              <DashBoardTodo />
            </OkrContainer>
            <DashBoardCalendar />
          </main>
        </>
      )}
    </StWrap>
  );
}

const OkrContainer = styled.div`
  width: 100%;
  display: flex;
`;
