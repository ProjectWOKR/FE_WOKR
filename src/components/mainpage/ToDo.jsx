import React from 'react';
import {
  Container,
  Container2,
  CreateBtn,
  Header,
  HeaderBox,
} from './todo.styled';
export default function ToDo() {
  return (
    <Container>
      <HeaderBox>
        <Header>To-do</Header>
        <CreateBtn>+</CreateBtn>
      </HeaderBox>
      <Container2 />
    </Container>
  );
}
