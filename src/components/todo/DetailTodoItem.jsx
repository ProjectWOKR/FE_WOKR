import { GetKR, GetUser } from '../../apis/apiGET';
import { PatchCheck } from '../../apis/apiPATCH';
import {
  PostCompletionTodo,
  PostExpirationTodo,
  PostProgressTodo,
} from '../../apis/apiPOST';
import badgeS from '../../assets/badgeS.png';
import checkFull from '../../assets/checkFull.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import warn from '../../assets/warn.png';
import {
  clickDate,
  filterTeamMemberSelector,
  getOKRData,
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

const DetailTodoItem = ({ el, todayFormat, tomorrow }) => {
  // console.log(todayFormat);
  // console.log(dateInfo);
  // const queryClient = useQueryClient();

  // // 우선순위
  // const Priority = ({ pt }) => {
  //   // console.log('pt :', pt);
  //   if (pt.priority === 1) {
  //     return <img src={red} alt='' />;
  //   } else if (pt.priority === 2) {
  //     return <img src={yellow} alt='' />;
  //   } else if (pt.priority === 3) {
  //     return <img src={blue} alt='' />;
  //   } else {
  //     return;
  //   }
  // };

  // const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
  //   onSuccess: response => {
  //     if (process.env.NODE_ENV !== 'development') {
  //       ReactGA.event({
  //         category: '버튼',
  //         action: 'TODO 완료',
  //       });
  //     }
  //     queryClient.invalidateQueries(['ALLTODO']);
  //     queryClient.invalidateQueries(['PASTTODO']);
  //   },
  //   onError: response => {},
  // });

  // // 체크
  // const Check = ({ pt }) => {
  //   const onClickCheck = () => {
  //     const id = pt.toDoId;
  //     patchCheckmutate({ id });
  //     toast('To Do를 완료했습니다.');
  //   };

  //   return <div className='check' onClick={onClickCheck} />;
  // };

  // //오늘, 내일 글씨
  // const DateColor = ({ el, today, tomorrow, pt }) => {
  //   if (el.targetDate === today) {
  //     return (
  //       <div className='dateGreen'>
  //         {pt.fstartDate}
  //         {pt.startDateTime === '00:00' ? null : pt.startDateTime} ~{' '}
  //         {pt.fendDate}
  //         {pt.endDateTime === '00:00' ? null : pt.endDateTime}
  //       </div>
  //     );
  //   } else if (el.targetDate === tomorrow) {
  //     return (
  //       <div className='dateYellow'>
  //         {pt.fstartDate}
  //         {pt.startDateTime === '00:00' ? null : pt.startDateTime} ~{' '}
  //         {pt.fendDate}
  //         {pt.endDateTime === '00:00' ? null : pt.endDateTime}
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className='normalDate'>
  //         {pt.fstartDate}
  //         {pt.startDateTime === '00:00' ? null : pt.startDateTime} ~{' '}
  //         {pt.fendDate}
  //         {pt.endDateTime === '00:00' ? null : pt.endDateTime}
  //       </div>
  //     );
  //   }
  // };

  // const Title = ({ pt }) => {
  //   // console.log(pt);
  //   if (pt.color === null) {
  //     return (
  //       <div className='colorNull' style={{ color: '#9b9b9b' }}>
  //         {pt.keyResultId === null ? 'none' : `KR${pt.krNumber}`}
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className='kr' style={{ color: pt.color }}>
  //       {pt.keyResultId === null ? 'none' : `KR${pt.krNumber}`}
  //     </div>
  //   );
  // };

  // const [todoModalOn, setTodoModalOn] = useState(false);

  // const onTodoCloseModal = () => {
  //   setTodoModalOn(!todoModalOn);
  // };

  // const setPatchTodoInfo = useSetRecoilState(patchTodoInfo);

  // const patchTodo = (
  //   id,
  //   todo,
  //   memo,
  //   startDate,
  //   startDateTime,
  //   endDate,
  //   endDateTime,
  //   priority
  // ) => {
  //   console.log(todo);
  //   setPatchTodoInfo({
  //     id,
  //     toDo: todo,
  //     memo,
  //     startDate,
  //     startDateTime,
  //     endDate,
  //     endDateTime,
  //     priority,
  //   });
  //   setTodoModalOn(!todoModalOn);
  // };

  // const FilterMyTodo = ({ pt }) => {
  //   if (pt.myToDo === true) {
  //     return (
  //       <div className='item'>
  //         <div
  //           className='flexLeft'
  //           style={
  //             pt.completion === true
  //               ? { cursor: 'default' }
  //               : { cursor: 'pointer' }
  //           }
  //           onClick={() => {
  //             patchTodo(
  //               pt.toDoId,
  //               pt.toDo,
  //               pt.memo,
  //               pt.startDate,
  //               pt.startDateTime,
  //               pt.endDate,
  //               pt.endDateTime,
  //               pt.priority
  //             );
  //           }}>
  //           <Title pt={pt} />
  //           <div className='krBox' title={pt.memo}>
  //             <div className='krTitle'>{pt.toDo}</div>
  //             <div className='krManager'>
  //               <DateColor el={el} today={today} tomorrow={tomorrow} pt={pt} />
  //             </div>
  //           </div>
  //         </div>
  //         <div className='flexRight'>
  //           <Priority pt={pt} />
  //           <Check pt={pt} />
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className='item'>
  //         <div
  //           className='flexLeft'
  //           style={
  //             pt.completion === true
  //               ? { cursor: 'default' }
  //               : { cursor: 'pointer' }
  //           }
  //           onClick={() => {
  //             alert('본인이 작성한 TODO만 수정 가능합니다.');
  //           }}>
  //           <Title pt={pt} />
  //           <div className='krBox' title={pt.memo}>
  //             <div className='krTitle'>{pt.toDo}</div>
  //             <div className='krManager'>
  //               <DateColor el={el} today={today} tomorrow={tomorrow} pt={pt} />

  //               <div className='kmName'>{pt.createUser}</div>
  //               <img src={badgeS} alt='' />
  //             </div>
  //           </div>
  //         </div>
  //         <div className='flexRight'>
  //           <Priority pt={pt} />
  //           <div className='another' />
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  // //해당 날짜에 todo가 없을 때
  // const HavePt = () => {
  //   if (el.progressTodo.length === 0) {
  //     return (
  //       <TodoDetailItem>
  //         <div className='notHave'>이 날은 진행중인 To Do가 없습니다.</div>
  //       </TodoDetailItem>
  //     );
  //   } else {
  //     return (
  //       <>
  //         {el.progressTodo.map(pt => (
  //           <TodoDetailItem key={pt.toDoId}>
  //             <FilterMyTodo pt={pt} />
  //           </TodoDetailItem>
  //         ))}
  //       </>
  //     );
  //   }
  // };
  const queryClient = useQueryClient();
  // 기간 만료 todo 불러오기

  const [info, setInfo] = useRecoilState(todoDateInfo);
  // console.log('info :', info);

  const [expiration, setExpiration] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completion, setCompletion] = useState([]);
  // console.log('expiration :', expiration);
  // console.log('진행 중 :', progress);
  // console.log('완료 :', completion);

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
      return <h2>기한이 지난 todo 없음</h2>;
    } else {
      return expiration.map(el => (
        <StExpirationTodo key={el.userId}>
          {el.expirationTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              <div className='check' data={data}></div>
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div className='nameDate'>
                  <div className='todoName'>{data.toDo}</div>
                  <div className='memo'>
                    {data.memo === '' ? '메모가 없습니다.' : `${data.memo}`}
                  </div>
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

  // 진행중 만료 컴포넌트
  const ProgressTodo = () => {
    if (progress?.length === 0) {
      return <h2>진행중인 todo 없음</h2>;
    } else {
      return progress.map(el => (
        <StExpirationTodo key={el.userId}>
          {el.progressTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              <div className='check' data={data}></div>
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div className='nameDate'>
                  <div className='todoName'>{data.toDo}</div>
                  <div className='memo'>
                    {data.memo === '' ? '메모가 없습니다.' : `${data.memo}`}
                  </div>
                  <p>
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

  //완료 컴포넌트
  const CompletionTodo = () => {
    if (completion?.length === 0) {
      return <h2>진행중인 todo 없음</h2>;
    } else {
      return completion.map(el => (
        <StCompletionTodo key={el.userId}>
          {el.completionTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              <Check data={data} />
              {/* <div className='check' data={data}></div> */}
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div className='nameDate'>
                  <div className='todoName'>{data.toDo}</div>
                  <div className='memo'>
                    {data.memo === '' ? '메모가 없습니다.' : `${data.memo}`}
                  </div>
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
    // console.log(data)
    const onClickCheck = () => {
      const id = data.toDoId;
      patchCheckmutate({ id });
      console.log('체크 눌림');
      // toast('할 일을 완료했습니다.');
    };

    // return <div className='completion' onClick={onClickCheck} />;
    return (
      <img
        className='completion'
        src={checkFull}
        alt='checked'
        onClick={onClickCheck}
      />
    );
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
      info.teamMembers !== null
    ) {
      // console.log('effect 변경!');
      expirationTodo({ info });
      progressTodo({ info });
      completionTodo({ info });
    }
  }, [info]);

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
      <h2>--진행중--</h2>
      <ProgressTodo />
      <h2>--완료--</h2>
      <CompletionTodo />
      <h2>--기간만료--</h2>
      <ExpirationTodo />

      {/* <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal> */}
    </>
  );
};

export default DetailTodoItem;
