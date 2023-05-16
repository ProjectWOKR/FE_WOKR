import Todo from '../components/todo/Todo';
import { StWrap, StWrapBackground } from '../styles/mainpage.styled';
import '@tanstack/react-query';
import React from 'react';

const TodoPage = () => {
  const [info, setInfo] = useRecoilState(todoDateInfo);
  const [krdata, setKrData] = useRecoilState(krDataAtom);
  // console.log(krdata);
  const { data: getKr } = useQuery(['KR'], GetKR, {
    onSuccess: response => {
      // setKrState(response);
      // console.log('response :', response);
      const filterArray = response.map(el => el.keyResultId);
      filterArray.push(0);
      sessionStorage.setItem('kr', JSON.stringify(filterArray));
      setKrData(response);
      // setInfo({ ...info, KeyResultIds: filterArray });
    },
  });

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
