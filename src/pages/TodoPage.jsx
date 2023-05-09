import { GetKR } from '../apis/apiGET';
import Menu from '../components/dashboard/Menu';
import Todo from '../components/todo/Todo';
import {
  clickDate,
  krDataAtom,
  myUserIdSelecctor,
  todoDateInfo,
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

  return (
    <StWrapBackground>
      <StWrap>
        {/* <aside>
        <Menu />
      </aside> */}

        <main>
          <Todo />
        </main>
      </StWrap>
    </StWrapBackground>
  );
};

export default TodoPage;
