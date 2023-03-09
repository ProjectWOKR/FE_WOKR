import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/global/header/Header';
import Menu from '../components/mainpage/Menu';
import DashBoardOKR from '../components/mainpage/OKR';
import DashBoardTodo from '../components/mainpage/ToDo';
import DashBoardCalendar from '../components/mainpage/Calendar';
import Todo from '../components/todo/todo';
import TeamOKR from '../components/teamOKR/teamOKR';
import Calendar from '../components/calendar/Calendar';
import CompanyOKR from '../components/companyOKR/companyOKR';
import { useRecoilValue } from 'recoil';
import { TabState } from '../store/store';
import { useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.accesstoken === undefined) {
  //     navigate('/');
  //   }
  // }, []);

  const tabState = useRecoilValue(TabState);
  return (
    <Container>
      <Header />
      <Container2>
        <Menu />
        <Container3>
          {tabState === 0 ? (
            <>
              <Container4>
                <DashBoardOKR />
                <DashBoardTodo />
              </Container4>
              <DashBoardCalendar />
            </>
          ) : tabState === 1 ? (
            <CompanyOKR />
          ) : tabState === 2 ? (
            <TeamOKR />
          ) : tabState === 3 ? (
            <Todo />
          ) : tabState === 4 ? (
            <Calendar />
          ) : null}
        </Container3>
      </Container2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container4 = styled.div`
  display: flex;
  flex-direction: row;
`;
