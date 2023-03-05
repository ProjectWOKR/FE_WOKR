import React from 'react';
import {
  Container,
  Container2,
  CreateBtn,
  Header,
  HeaderBox,
} from './OKR.styled';

export default function OKR() {
  return (
    <Container>
      <HeaderBox>
        <Header>팀 OKR</Header>
        <CreateBtn>+</CreateBtn>
      </HeaderBox>
      <Container2 />
    </Container>
  );
}
