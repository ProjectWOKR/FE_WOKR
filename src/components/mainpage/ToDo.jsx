import React, { useState, useRef } from 'react';
import { NotHave } from '../global/globalmodal/modal.styled';
import Potal from '../global/globalmodal/Potal';
import TodoModal from '../global/globalmodal/TodoModal';
import {
  Container,
  Container2,
  CreateBtn,
  Header,
  HeaderBox,
  TodoContainer,
  StTodoItem,
} from './todo.styled';
import TodoItem from './TodoItem';
export default function ToDo() {
  //모달 상태관리
  const [todoModalOn, setTodoModalOn] = useState(false);
  /**모달 닫는 함수 */
  const onCloseTodoModal = () => {
    setTodoModalOn(!todoModalOn);
  };
  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const createTodo = () => {
    setTodoModalOn(!todoModalOn);
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const todoModalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */
  const todoModalOutSideClick = e => {
    if (todoModalRef.current === e.target) {
      setTodoModalOn(!todoModalOn);
    }
  };
  return (
    <Container>
      <HeaderBox>
        <Header>To-do</Header>
        <CreateBtn onClick={createTodo}>+</CreateBtn>
      </HeaderBox>
      <Container2>
        <TodoContainer>
          <StTodoItem>
            <TodoItem />
          </StTodoItem>
          <StTodoItem>
            <TodoItem />
          </StTodoItem>
          <StTodoItem>
            <TodoItem />
          </StTodoItem>
          {/* {!TodoItem ? (
            <StTodoItem>
              <TodoItem />
            </StTodoItem>
          ) : (
            <NotHave>
              <h2>설정된 To-Do가 없습니다.</h2>
              <button onClick={createTodo}>추가하기</button>
            </NotHave>
          )} */}
        </TodoContainer>
      </Container2>
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
