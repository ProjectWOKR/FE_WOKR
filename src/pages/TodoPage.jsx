import { GetKR } from '../apis/apiGET';
import Menu from '../components/dashboard/Menu';
import Todo from '../components/todo/Todo';
import {
  clickDate,
  dateArray,
  isDone,
  krDataAtom,
  myUserIdSelecctor,
  teamMemberAtom,
  test,
  todoDateInfo,
  todoListState,
  userDetail,
  userId,
} from '../store/store';
import { StWrap, StWrapBackground } from '../styles/mainpage.styled';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const TodoPage = () => {
  // const [info, setInfo] = useRecoilState(todoDateInfo);
  // const [krdata, setKrData] = useRecoilState(krDataAtom);
  // // console.log(krdata);
  // const { data: getKr } = useQuery(['KR'], GetKR, {
  //   onSuccess: response => {
  //     // setKrState(response);
  //     // console.log('response :', response);
  //     const filterArray = response.map(el => el.keyResultId);
  //     filterArray.push(0);
  //     sessionStorage.setItem('kr', JSON.stringify(filterArray));
  //     setKrData(response);
  //     // setInfo({ ...info, KeyResultIds: filterArray });
  //   },
  // });

  const detail = useRecoilValue(userDetail);
  const id = useRecoilValue(userId);
  // const okr = useRecoilValue(getOKRData);
  const kr = useRecoilValue(krDataAtom);
  const list = useRecoilValue(todoListState);
  const dateInfo = useRecoilValue(todoDateInfo);
  const array = useRecoilValue(dateArray);
  const done = useRecoilValue(isDone);
  const team = useRecoilValue(teamMemberAtom);

  const temp = useRecoilValue(test);
  // console.log('test결과 ::', temp);

  const date = useRecoilValue(clickDate);

  // console.log(dateInfo);

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
