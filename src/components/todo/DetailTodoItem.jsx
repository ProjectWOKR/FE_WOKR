import { GetKR, GetUser } from '../../apis/apiGET';
import { PatchCheck } from '../../apis/apiPATCH';
import {
  PostCompletionTodo,
  PostExpirationTodo,
  PostProgressTodo,
} from '../../apis/apiPOST';
import badgeS from '../../assets/badgeS.png';
import checkFull from '../../assets/checkFull.png';
import lock from '../../assets/lock.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import warn from '../../assets/warn.png';
import {
  clickDate,
  filterTeamMemberSelector,
  getOKRData,
  isDone,
  krDataAtom,
  myUserIdSelecctor,
  patchTodoInfo,
  teamMemberTodoSelector,
  todoDateInfo,
  userId,
  userInfo,
} from '../../store/store';
import {
  StCompletionTodo,
  StExpirationTodo,
  StProgressTodo,
  StTodo,
  StTodoItem,
} from '../../styles/todo.styled';
import {
  DDay,
  TodoDetailHeader,
  TodoDetailItem,
} from '../../styles/tododetail.styled';
import TodoItem from '../dashboard/TodoItem';
import Loading from '../global/Loading';
import Potal from '../global/globalModal/Potal';
import TodoPathModal from '../global/globalModal/TodoPathModal';
import Filter from './Filter';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const DetailTodoItem = () => {
  const queryClient = useQueryClient();
  // 기간 만료 todo 불러오기

  const [info, setInfo] = useRecoilState(todoDateInfo);
  const [isCompletion, setIsCompletion] = useRecoilState(isDone);
  // console.log(isCompletion);
  // console.log('info :', info);
  // console.log('---------');

  const [expiration, setExpiration] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completion, setCompletion] = useState([]);
  // console.log('진행 중 :', progress);
  // console.log('완료 :', completion);
  // console.log('expiration :', expiration);

  // });

  // 기한 만료
  const {
    mutate: expirationTodo,
    isLoading,
    isError,
    error,
  } = useMutation(PostExpirationTodo, {
    onSuccess: data => {
      setExpiration(data);
      // console.log('response :', data);
    },
  });
  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <div>{error.message}</div>;
  // }

  // 진행중
  const { mutate: progressTodo } = useMutation(PostProgressTodo, {
    onSuccess: data => {
      setProgress(data);
      // console.log('response :', data);
    },
  });

  // 완료
  const { mutate: completionTodo } = useMutation(PostCompletionTodo, {
    onSuccess: data => {
      setCompletion(data);
      // console.log('response :', data);
    },
  });

  // 기한 만료 컴포넌트
  const ExpirationTodo = () => {
    if (expiration?.length === 0) {
      return;
    } else {
      return expiration.map(el => (
        <StExpirationTodo key={el.userId}>
          {el.expirationTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              {el.myToDo ? (
                <Check data={data} />
              ) : (
                <img src={lock} alt='lock' className='lock' />
              )}
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div
                  className='nameDate'
                  style={el.myToDo ? null : { cursor: 'default' }}>
                  <div className='todoName'>{data.toDo}</div>
                  {data.memo === '' ? null : (
                    <div className='memo'>{data.memo}</div>
                  )}
                  <p>
                    <img src={warn} alt='warn' />
                    {data.fstartDate} - {data.fendDate}
                  </p>
                </div>
              </div>
              <Priority data={data} />
            </div>
          ))}
        </StExpirationTodo>
      ));
    }
  };

  // 진행중  컴포넌트
  const ProgressTodo = () => {
    if (progress?.length === 0) {
      return;
    } else {
      return progress.map(el => (
        <StProgressTodo key={el.userId}>
          {el.progressTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              {el.myToDo ? (
                <Check data={data} />
              ) : (
                <img src={lock} alt='lock' className='lock' />
              )}

              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div
                  className='nameDate'
                  style={el.myToDo ? null : { cursor: 'default' }}>
                  <div
                    className='todoName'
                    style={data.memo === '' ? { marginBottom: '5px' } : null}>
                    {data.toDo}
                  </div>
                  {data.memo === '' ? null : (
                    <div className='memo'>{data.memo}</div>
                  )}

                  <p>
                    {data.fstartDate} - {data.fendDate}
                  </p>
                </div>
              </div>
              <Priority data={data} />
            </div>
          ))}
        </StProgressTodo>
      ));
    }
  };

  //완료 컴포넌트
  const CompletionTodo = () => {
    if (completion?.length === 0) {
      return;
    } else {
      return completion.map(el => (
        <StCompletionTodo key={el.userId}>
          {el.completionTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              {el.myToDo ? (
                <Check data={data} />
              ) : (
                <img src={lock} alt='lock' className='lock' />
              )}
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div
                  className='nameDate'
                  style={el.myToDo ? null : { cursor: 'default' }}>
                  <div className='todoName'>{data.toDo}</div>
                  {data.memo === '' ? null : (
                    <div className='memo'>{data.memo}</div>
                  )}
                  <p>
                    {data.fstartDate} - {data.fendDate}
                  </p>
                </div>
              </div>
              <Priority data={data} />
            </div>
          ))}
        </StCompletionTodo>
      ));
    }
  };

  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 완료',
        });
      }
      queryClient.invalidateQueries(['TODO']);
      // queryClient.invalidateQueries(['completionTodo']);

      expirationTodo({ info });
      progressTodo({ info });
      completionTodo({ info });
    },
    onError: response => {
      // console.log(response);
    },
  });

  const Check = ({ data }) => {
    // console.log(data);
    const onClickCheck = () => {
      const id = data.toDoId;
      patchCheckmutate({ id });
      // console.log('체크 눌림');
      // toast('할 일을 완료했습니다.');
    };

    if (data.completion) {
      return (
        <img
          className='completion'
          src={checkFull}
          alt='checked'
          onClick={onClickCheck}
        />
      );
    } else {
      return <div className='notCompletion' onClick={onClickCheck}></div>;
    }
  };

  const Priority = ({ data }) => {
    if (data.priority === 1) {
      return <img className='priority' src={red} alt='' />;
    } else if (data.priority === 2) {
      return <img className='priority' src={yellow} alt='' />;
    } else if (data.priority === 3) {
      return <img className='priority' src={blue} alt='' />;
    } else {
      return;
    }
  };

  useEffect(() => {
    // console.log('effect 들어왔어');
    if (
      info.targetDate !== null &&
      info.KeyResultIds !== null &&
      info.teamMembers !== null &&
      info.KeyResultIds.length !== 0 &&
      isCompletion.length !== 0 &&
      isCompletion.includes('done') === true &&
      isCompletion.includes('notDone') === true
    ) {
      // console.log('통신한다?');
      expirationTodo({ info });
      progressTodo({ info });
      completionTodo({ info });
      // console.log('ui 변경했다!');
    }
  }, [info, isCompletion]);

  // console.log(isCompletion === []);

  // useEffect(() => {
  //   progressTodo({ info });
  //   completionTodo({ info });
  // }, [patchCheckmutate]);

  return (
    <>
      <DDay>
        <TodoDetailHeader>
          <div className='header'>
            <div className='title'>{info.targetDate}</div>
            <Filter />
          </div>
        </TodoDetailHeader>
      </DDay>

      {isCompletion.length === 1 && isCompletion.includes('done') ? (
        <>
          {/* <h2>--완료--</h2> */}
          <CompletionTodo />
        </>
      ) : isCompletion.length === 1 && isCompletion.includes('notDone') ? (
        <>
          {/* <h2>--기간만료--</h2> */}
          <ExpirationTodo />
        </>
      ) : expiration.length === 0 &&
        progress.length === 0 &&
        completion.length === 0 ? (
        <h2 className='noAny'>등록된 To-Do가 없습니다.</h2>
      ) : (
        <>
          <ProgressTodo />
          <CompletionTodo />
          <ExpirationTodo />
        </>
      )}

      {/* <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal> */}
    </>
  );
};

export default DetailTodoItem;
