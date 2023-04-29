import { GetKR } from '../apis/apiGET';
import Menu from '../components/dashboard/Menu';
import Todo from '../components/todo/Todo';
import { clickDate, krDataAtom, myUserIdSelecctor } from '../store/store';
import { StWrap } from '../styles/mainpage.styled';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const TodoPage = () => {
  return (
    <StWrap>
      <aside>
        <Menu />
      </aside>

      <main>
        <Todo />
      </main>
    </StWrap>
  );
};

export default TodoPage;
