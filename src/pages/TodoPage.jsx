import Todo from '../components/todo/Todo';
import { StWrap, StWrapBackground } from '../styles/mainpage.styled';
import '@tanstack/react-query';
import React from 'react';

const TodoPage = () => {
  return (
    <StWrapBackground>
      <StWrap>
        <main>
          <Todo />
        </main>
      </StWrap>
    </StWrapBackground>
  );
};

export default TodoPage;
