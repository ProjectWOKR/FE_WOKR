import { GetAllTodo, GetPostTodo, GetUser } from '../../apis/apiGET';
import Loading from '../global/Loading';
import Toast from './../global/Toast';
import DetailTodoItem from './DetailTodoItem';
import FinishTodo from './FinishTodo';
import PastTodo from './PastTodo';
import TeamTodo from './TeamTodo';
import TodoNavi from './TodoNavi';
import { DetailTodoWrap, StTeam } from './tododetail.styled';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function Todo() {
  //todo 전부 가져오기
  const { data: getAllTodo, isLoading } = useQuery(['ALLTODO'], GetAllTodo, {
    onSuccess: response => {},
    onError: response => {},
  });

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timeout;

    if (!isLoading) {
      timeout = setTimeout(() => {
        setShowLoading(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

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

  // const { data: getMember } = useQuery(['MEMBER'], GetUser, {
  //   onSuccess: response => {
  //     // console.log('user :', response);
  //   },
  //   onError: response => {
  //     // console.log(response);
  //   },
  // });

  // -------------------------- 여기서 부터 이제 무한스크롤

  return (
    <StSticky>
      {getAllTodo?.length === 0 ? (
        <h2 className='notHave'>설정된 To Do가 없습니다.</h2>
      ) : (
        <>
          {showLoading && <Loading />}
          {!showLoading && (
            <>
              <TodoDashboard>
                <TodoNavi todayFormat={today} getAllTodo={getAllTodo} />
                <PastTodo />
                {getAllTodo?.map(el => (
                  <DetailTodoWrap key={el.targetDate}>
                    <DetailTodoItem el={el} today={today} tomorrow={tomorrow} />
                    <FinishTodo el={el} />
                  </DetailTodoWrap>
                ))}
              </TodoDashboard>
              <TeamTodo />
            </>
          )}
          <Toast />
        </>
      )}
    </StSticky>
  );
}

const StSticky = styled.div`
  display: flex;
  position: relative;
  .notHave {
    width: 100%;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--main-color);
    /* background-color: pink; */
  }
`;

const TodoDashboard = styled.div`
  max-width: 1195px;
  width: 100%;
  padding: 0 27px;
`;
