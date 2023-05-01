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
import { jwt_decode } from 'jsonwebtoken/decode';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

export default function Todo() {
  //todo 전부 가져오기

  const now = new Date();
  let today = '';
  let tomorrow;
  if (now.getMonth() + 1 < 10 && now.getDate() < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-0${now.getDate()}`;
    // tomorrow = `0${now.getMonth() + 1}월 0${now.getDate() + 1}일`;
    sessionStorage.setItem('targetDate', today);
  } else if (now.getDate() < 10) {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-0${now.getDate()}`;
    // tomorrow = `${now.getFullYear()}-${now.getMonth() + 1}-0${
    //   now.getDate() + 1
    // }`;
    sessionStorage.setItem('targetDate', today);
  } else if (now.getMonth() + 1 < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
    // tomorrow = `0${now.getMonth() + 1}월 ${now.getDate() + 1}일`;
    sessionStorage.setItem('targetDate', today);
  } else {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    // tomorrow = `${now.getMonth() + 1}월 ${now.getDate() + 1}일`;
    sessionStorage.setItem('targetDate', today);
  }

  return (
    <StSticky>
      <TodoDashboard>
        <TodoNavi todayFormat={today} />

        <DetailTodoWrap>
          <DetailTodoItem todayFormat={today} />
        </DetailTodoWrap>
      </TodoDashboard>
      <TeamTodo />
      <Toast />
    </StSticky>
  );
}

const StSticky = styled.div`
  display: flex;
  /* background-color: pink; */
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
