import { GetTodo } from '../../apis/apiGET';
import plus from '../../assets/plus.png';
import { todoListSelector, todoListState } from '../../store/store';
import {
  Container,
  Header,
  HeaderBox,
  TodoContainer,
  StTodoItem,
} from '../../styles/todo.styled';
import Loading from '../global/Loading.jsx';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
import { NotHave, NotHaveEl } from '../global/globalModal/modal.styled';
import TodoItem from './TodoItem';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function DashTodo() {
  const [todoModalOn, setTodoModalOn] = useState(false);
  const onCloseTodoModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const createTodo = () => {
    setTodoModalOn(!todoModalOn);
  };

  const todoModalRef = useRef(null);
  const todoModalOutSideClick = e => {
    if (todoModalRef.current === e.target) {
      setTodoModalOn(!todoModalOn);
    }
  };

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const todoSelector = useRecoilValue(todoListSelector);
  // console.log('todoSelector :', todoSelector);
  // 임시
  const {
    data: getTodo,
    isLoading,
    isError,
    error,
  } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      setTodoList(response);
      // console.log(response);
    },
    onError: response => {},
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <Container>
      <HeaderBox>
        <Header>오늘의 To-do</Header>
        <div className='btnBox'>
          <div onClick={createTodo}>
            <img src={plus} alt='plus' />
          </div>
        </div>
      </HeaderBox>

      <TodoContainer>
        {getTodo?.length !== 0 ? (
          <StTodoItem>
            <TodoItem getTodo={getTodo} />
          </StTodoItem>
        ) : (
          <NotHaveEl>
            <h2>설정된 To Do 없습니다.</h2>
            <div className='btnFlex' onClick={createTodo}>
              <img src={plus} alt='plus' />
              <div>To Do추가</div>
            </div>
          </NotHaveEl>
        )}
      </TodoContainer>

      <Potal>
        {todoModalOn && (
          <TodoModal
            onCloseTodoModal={onCloseTodoModal}
            todoModalRef={todoModalRef}
            todoModalOutSideClick={todoModalOutSideClick}
          />
        )}
      </Potal>
    </Container>
  );
}
