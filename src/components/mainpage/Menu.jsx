import React from 'react';
import { Container, Header, Item } from './menu.styled';

export default function Menu() {
  return (
    <Container>
      <Header>Dashboard</Header>
      <Item>회사 전체 OKR</Item>
      <Item>TEAM OKR</Item>
      <Item>To-Do</Item>
      <Item>Calendar</Item>
    </Container>
  );
}
