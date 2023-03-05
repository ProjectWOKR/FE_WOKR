import React from 'react';
import styled from 'styled-components';
import Header from '../components/global/header/Header';
import Menu from '../components/mainpage/Menu';
import OKR from '../components/mainpage/OKR';
import Todo from '../components/mainpage/ToDo';
import Calendar from '../components/mainpage/Calendar';

export default function Mainpage() {
  return (
    <Container>
      <Header />
      <Container2>
        <Menu />
        <Container3>
          <Container4>
            <OKR />
            <Todo />
          </Container4>
          <Calendar />
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
