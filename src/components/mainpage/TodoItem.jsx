import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { GetCompletionTodo, GetOKR, GetTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import { PatchCheck } from '../../apis/apiPATCH';
import { toast } from 'react-toastify';
import Toast from '../global/Toast';
import { patchTodoInfo } from '../../store/store';
import { useSetRecoilState } from 'recoil';
import Potal from '../global/globalModal/Potal';
import TodoPathModal from '../global/globalModal/TodoPathModal';
import Todo from './../todo/Todo';
import ReactGA from 'react-ga4';

const TodoItem = ({ getTodo }) => {
  const queryClient = useQueryClient();

  // const { data: getTodo } = useQuery(['TODO'], GetTodo, {
  //   onSuccess: response => {
  //     // console.log('getTodo :', response);
  //   },
  //   onError: response => {},
  // });

  // filter 함수 사용
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const plusToday = `${now.getFullYear()}-${now.getMonth() + 1}-${
    now.getDate() + 1
  }`;

  const filterArray = getTodo?.filter(el => {
    if (el.completion === false) {
      if (new Date(plusToday) > new Date(el.startDate)) {
        return true;
      }
    }
    return false;
  });

  // console.log(filterArray);

  // 체크 수정
  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 완료',
        });
      }
      queryClient.invalidateQueries(['TODO']);
      queryClient.invalidateQueries(['completionTodo']);
    },
    onError: response => {},
  });

  const Check = ({ el }) => {
    const onClickCheck = () => {
      const id = el.toDoId;
      patchCheckmutate({ id });
      toast('할 일을 완료했습니다.');
    };

    return <div className='check' onClick={onClickCheck} />;
  };

  const Priority = ({ el }) => {
    if (el.priority === 1) {
      return <img src={red} alt='' />;
    } else if (el.priority === 2) {
      return <img src={yellow} alt='' />;
    } else if (el.priority === 3) {
      return <img src={blue} alt='' />;
    } else {
      return;
    }
  };

  const [todoModalOn, setTodoModalOn] = useState(false);
  // console.log(todoModalOn);

  const onTodoCloseModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const setPatchTodoInfo = useSetRecoilState(patchTodoInfo);

  const patchTodo = (
    id,
    todo,
    memo,
    startDate,
    startDateTime,
    endDate,
    endDateTime,
    priority
  ) => {
    console.log(todo);
    setPatchTodoInfo({
      id,
      toDo: todo,
      memo,
      startDate,
      startDateTime,
      endDate,
      endDateTime,
      priority,
    });
    setTodoModalOn(!todoModalOn);
  };

  console.log(filterArray);
  const { data: getCompletionTodo } = useQuery(
    ['completionTodo'],
    GetCompletionTodo,
    {
      onSuccess: response => {
        console.log('getCompletionTodo :', response);
      },
      onError: response => {},
    }
  );
  return (
    <>
      {filterArray?.map(el => (
        <div className='todo' key={el.toDoId}>
          <div className='title' style={{ color: el.color }}>
            {el.keyResultId === null ? 'none' : `KR${el.krNumber}`}
          </div>
          <div className='detail'>
            <div
              className='nameDate'
              onClick={() => {
                patchTodo(
                  el.toDoId,
                  el.toDo,
                  el.memo,
                  el.startDate,
                  el.startDateTime,
                  el.endDate,
                  el.endDateTime,
                  el.priority
                );
              }}>
              <div title={el.memo}>{el.toDo}</div>
              <p>
                {el.fstartDate}~{el.fendDate} 까지
              </p>
            </div>
            <div className='priorityBox'>
              <Priority el={el} />
              <Check el={el} />
            </div>
          </div>
        </div>
      ))}
      {getCompletionTodo?.map(el => (
        <div className='todo' key={el.toDoId}>
          <div className='title' style={{ color: el.color }}>
            {el.keyResultId === null ? 'none' : `KR${el.krNumber}`}
          </div>
          <div className='detail'>
            <div className='nameDateComplitc'>
              <div title={el.memo}>{el.toDo}</div>
              <p style={{ color: 'red' }}>
                {/* {el.fstartDate}~{el.fendDate} 까지 */}
                {el.fendDate} 완료
              </p>
            </div>
            <div className='priorityBox'>
              <Priority el={el} />
              <div className='completion'></div>
            </div>
          </div>
        </div>
      ))}
      <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal>
      <Toast />
    </>
  );
};

export default TodoItem;
