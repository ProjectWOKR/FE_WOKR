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
      <Item tabState={tabState} onClick={() => onTab(0)}>
        <div className='item1'>Dashboard</div>
      </Item>
      <Item className='item2' tabState={tabState} onClick={() => onTab(1)}>
        <div className='item2'>회사 전체 OKR</div>
      </Item>
      <Item className='item3' tabState={tabState} onClick={() => onTab(2)}>
        <div className='item3'>TEAM OKR</div>
      </Item>
      <Item className='item4' tabState={tabState} onClick={() => onTab(3)}>
        <div className='item4'>To-Do</div>
      </Item>
      <Item className='item5' tabState={tabState} onClick={() => onTab(4)}>
        <div className='item5'>Calendar</div>
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
  .item2 {
    color: ${({ tabState }) => `${tabState === 1 ? 'red' : 'black'}`};
  }
  .item3 {
    color: ${({ tabState }) => `${tabState === 2 ? 'red' : 'black'}`};
  }
  .item4 {
    color: ${({ tabState }) => `${tabState === 3 ? 'red' : 'black'}`};
  }
  .item5 {
    color: ${({ tabState }) => `${tabState === 4 ? 'red' : 'black'}`};
  }
`;
