import Menu from '../components/dashboard/Menu';
import Todo from '../components/todo/Todo';
import { StWrap } from '../styles/mainpage.styled';
import React from 'react';

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
