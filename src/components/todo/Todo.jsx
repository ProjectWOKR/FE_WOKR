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

  return (
    <StSticky>
      <TodoDashboard>
        {/* <TodoNavi todayFormat={today} /> */}
        <TodoNavi />

        <DetailTodoWrap>
          {/* <DetailTodoItem todayFormat={today} /> */}
          <DetailTodoItem />
        </DetailTodoWrap>
      </TodoDashboard>
      <TeamTodo />
      <Toast />
    </StSticky>
  );
}

const StSticky = styled.div`
  display: flex;
  .notHave {
    width: 100%;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--main-color);
  }
`;

const TodoDashboard = styled.div`
  max-width: 1195px;
  width: 100%;
  position: relative;
`;
