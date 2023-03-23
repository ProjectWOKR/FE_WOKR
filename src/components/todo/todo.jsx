import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { GetAllTodo, GetPostTodo, GetUser } from '../../apis/apiGET';
import DetailTodoItem from './DetailTodoItem';
import FinishTodo from './FinishTodo';
import PastTodo from './PastTodo';
import TeamTodo from './TeamTodo';
import { DetailTodoWrap, StTeam } from './tododetail.styled';
import TodoNavi from './TodoNavi';

export default function Todo() {
  //todo 전부 가져오기
  const { data: getAllTodo } = useQuery(['ALLTODO'], GetAllTodo, {
    onSuccess: response => {
      console.log('todo :', response);
    },
    onError: response => {
      console.log(response.response.data);
    },
  });

  // const { data: getMember } = useQuery(['MEMBER'], GetUser, {
  //   onSuccess: response => {
  //     console.log('user :', response);
  //   },
  //   onError: response => {
  //     console.log(response);
  //   },
  // });

  return (
    <StSticky>
      {/* <h2>설정된 To Do가 없습니다.</h2> */}
      <TodoDashboard>
        <TodoNavi />
        <PastTodo />
        <DetailTodoWrap>
          <DetailTodoItem />
          <FinishTodo />
        </DetailTodoWrap>
      </TodoDashboard>
      <TeamTodo />
    </StSticky>
  );
}

const StSticky = styled.div`
  display: flex;
  /* background-color: pink; */
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--main-color);
  }
`;

const TodoDashboard = styled.div`
  /* background-color: #fbe6e9; */
  max-width: 1195px;
  width: 100%;
  /* overflow-y: scroll; */
  height: 3000px;
  padding: 0 27px;
`;
