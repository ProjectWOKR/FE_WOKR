import React, { useState, useRef } from 'react';
import { NotHave } from '../global/globalModal/modal.styled';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
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

import plus from '../../assets/plus.png';
import more from '../../assets/more.png';

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
        <div className='btnBox'>
          <div onClick={createTodo}>
            <img src={plus} alt='' />
          </div>
          <div>
            <img src={more} alt='' />
          </div>
        </div>
      </HeaderBox>

      <TodoContainer>
        {/* <StTodoItem>
            <TodoItem />
          </StTodoItem>
          <StTodoItem>
            <TodoItem />
          </StTodoItem>
          <StTodoItem>
            <TodoItem />
          </StTodoItem> */}
        {!TodoItem ? (
          <StTodoItem>
            <TodoItem />
          </StTodoItem>
        ) : (
          <NotHave>
            <h2>설정된 To Do 없습니다.</h2>
            <div className='btnFlex' onClick={createTodo}>
              <img src={plus} alt='' />
              <div>To Do추가</div>
            </div>
          </NotHave>
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
