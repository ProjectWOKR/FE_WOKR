import { GetAllTodo, GetPostTodo, GetUser } from '../../apis/apiGET';
import { useAllTodo } from '../../shared/useSomethingQuery';
import {
  AllTodoSelector,
  allTodoListState,
  testAllTodoSelector,
} from '../../store/store';
import { DetailTodoWrap, StTeam } from '../../styles/tododetail.styled';
import Loading from '../global/Loading';
import Toast from './../global/Toast';
import DetailTodoItem from './DetailTodoItem';
import Filter from './Filter';
import FinishTodo from './FinishTodo';
import PastTodo from './PastTodo';
import TeamTodo from './TeamTodo';
import TodoNavi from './TodoNavi';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function Todo() {
  //todo 전부 가져오기

  // console.log(test);

  const [todoList, setTodoList] = useRecoilState(allTodoListState);
  const alltodo = useRecoilValue(AllTodoSelector);

  console.log('atom :', todoList);
  console.log('selector :', alltodo);

  const { data, isLoading, isError, error } = useQuery(
    ['alltodoTest'],
    GetAllTodo,
    {
      // suspense: true,
      onSuccess: data => {
        setTodoList(data);
      },
      onError: error => {
        console.log(error);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const now = new Date();
  let today = '';
  let tomorrow;
  if (now.getMonth() + 1 < 10 && now.getDate() < 10) {
    today = `0${now.getMonth() + 1}월 0${now.getDate()}일`;
    tomorrow = `0${now.getMonth() + 1}월 0${now.getDate() + 1}일`;
  } else if (now.getDate() < 10) {
    today = `${now.getMonth() + 1}월 0${now.getDate()}일`;
    tomorrow = `${now.getMonth() + 1}월 0${now.getDate() + 1}일`;
  } else if (now.getMonth() + 1 < 10) {
    today = `0${now.getMonth() + 1}월 ${now.getDate()}일`;
    tomorrow = `0${now.getMonth() + 1}월 ${now.getDate() + 1}일`;
  } else {
    today = `${now.getMonth() + 1}월 ${now.getDate()}일`;
    tomorrow = `${now.getMonth() + 1}월 ${now.getDate() + 1}일`;
  }

  return (
    <StSticky>
      {alltodo?.length === 0 ? (
        <h2 className='notHave'>설정된 To Do가 없습니다.</h2>
      ) : (
        <>
          <TodoDashboard>
            {/* <TodoNavi todayFormat={today} /> */}
            <TodoNavi todayFormat={today} getAllTodo={alltodo} />
            {/* <Filter /> */}
            {/* <PastTodo /> */}
            {/* {test?.map(el => (
                  <DetailTodoWrap key={el.targetDate}>
                    <DetailTodoItem el={el} today={today} tomorrow={tomorrow} />
                    <FinishTodo el={el} />
                  </DetailTodoWrap>
                ))} */}

            <DetailTodoWrap>
              <DetailTodoItem />
            </DetailTodoWrap>
          </TodoDashboard>
          <TeamTodo />

          <Toast />
        </>
      )}
    </StSticky>
  );
}

const StSticky = styled.div`
  display: flex;
  /* position: relative; */
  .notHave {
    width: 100%;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--main-color);
    /* background-color: skyblue; */
  }
`;

const TodoDashboard = styled.div`
  max-width: 1195px;
  width: 100%;
  /* padding: 0 27px; */
  position: relative;
  /* background-color: gray; */
`;
