import React from 'react';
import { Container } from './menu.styled';
import { useRecoilState } from 'recoil';
import { TabState } from '../../store/store';
import styled from 'styled-components';

export default function Menu() {
  const [tabState, setTabState] = useRecoilState(TabState);
  const onTab = tab => {
    if (tab === 0) {
      setTabState(0);
      console.log(tabState);
    }
    if (tab === 1) {
      setTabState(1);
      console.log(tabState);
    }
    if (tab === 2) {
      setTabState(2);
      console.log(tabState);
    }
    if (tab === 3) {
      setTabState(3);
      console.log(tabState);
    }
    if (tab === 4) {
      setTabState(4);
      console.log(tabState);
    }
  };
  return (
    <Container>
      <Item className='item1' tabState={tabState} onClick={() => onTab(0)}>
        Dashboard
      </Item>
      <Item className='item2' tabState={tabState} onClick={() => onTab(1)}>
        회사 전체 OKR
      </Item>
      <Item className='item3' tabState={tabState} onClick={() => onTab(2)}>
        TEAM OKR
      </Item>
      <Item className='item4' tabState={tabState} onClick={() => onTab(3)}>
        To-Do
      </Item>
      <Item className='item5' tabState={tabState} onClick={() => onTab(4)}>
        Calendar
      </Item>
    </Container>
  );
}

export const Item = styled.button`
  margin-top: 50px;
  border: none;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  background: none;

  .item1 {
    color: ${({ tabState }) => `${tabState === 0 ? 'red' : 'black'}`};
  }
`;
