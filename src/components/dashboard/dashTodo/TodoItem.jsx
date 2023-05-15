import { GetMyTodo } from '../../../apis/apiGET';
import { PatchCheck } from '../../../apis/apiPATCH';
import checkFull from '../../../assets/checkFull.png';
import blue from '../../../assets/todoBlue.png';
import red from '../../../assets/todoRed.png';
import yellow from '../../../assets/todoYellow.png';
import { patchTodoInfo } from '../../../store/store';
import Toast from '../../global/Toast';
import Potal from '../../global/globalModal/Potal';
import TodoPathModal from '../../global/globalModal/TodoPathModal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

const TodoItem = ({ todayFormat }) => {
  // console.log(todayFormat);
  const queryClient = useQueryClient();

  // const [count, setCount] = useRecoilState(myChange);
  // console.log(count);

  // const [info, setInfo] = useRecoilState(myTodo);

  const { data: myTodo } = useQuery(['ToDo'], GetMyTodo, {
    onSuccess: response => {
      // console.log(response);
    },
  });

  // 체크 수정
  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 완료',
        });
      }
      queryClient.invalidateQueries(['ToDo']);
      queryClient.invalidateQueries(['OKR']);
    },
    onError: response => {},
  });

  const Check = ({ el }) => {
    const onClickCheck = () => {
      const id = el.toDoId;
      patchCheckmutate({ id });
      toast('수정되었습니다.');
    };

    if (el.completion) {
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

  const Priority = ({ el }) => {
    if (el.priority === 1) {
      return <img className='priority' src={red} alt='' />;
    } else if (el.priority === 2) {
      return <img className='priority' src={yellow} alt='' />;
    } else if (el.priority === 3) {
      return <img className='priority' src={blue} alt='' />;
    } else {
      return;
    }
  };

  const [todoModalOn, setTodoModalOn] = useState(false);

  const onTodoCloseModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const setPatchTodoInfo = useSetRecoilState(patchTodoInfo);

  const patchTodo = (
    id,
    toDo,
    memo,
    startDate,
    startDateTime,
    endDate,
    endDateTime,
    priority
  ) => {
    // console.log(todo);
    setPatchTodoInfo({
      id,
      toDo,
      memo,
      startDate,
      startDateTime,
      endDate,
      endDateTime,
      priority,
    });
    setTodoModalOn(!todoModalOn);
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      {myTodo?.progressTodo.map(el => (
        <div className='todo' key={el.toDoId}>
          <Check el={el} />
          <div className='title' style={{ color: el.color }}>
            {el.keyResultId === null ? 'None' : `KR${el.krNumber}`}
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
              <div className='todoName'>{el.toDo}</div>
              {el.memo === '' ? null : <div className='memo'>{el.memo}</div>}
              <p>
                {el.fstartDate} - {el.fendDate}
              </p>
            </div>
          </div>
          <Priority el={el} />
        </div>
      ))}

      {myTodo?.completionTodo?.map(el => (
        <div className='todo' key={el.toDoId}>
          <Check el={el} />
          <div className='title' style={{ color: el.color }}>
            {el.keyResultId === null ? 'None' : `KR${el.krNumber}`}
          </div>
          <div
            className='detail'
            style={{
              textDecoration: 'line-through',
              color: 'rgb(155, 155, 155)',
            }}>
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
              <div className='todoName' style={{ color: 'rgb(155, 155, 155)' }}>
                {el.toDo}
              </div>
              {el.memo === '' ? null : (
                <div className='memo' style={{ color: 'rgb(155, 155, 155)' }}>
                  {el.memo}
                </div>
              )}
              <p style={{ color: 'rgb(155, 155, 155)' }}>
                {el.fstartDate} - {el.fendDate}
              </p>
            </div>
          </div>
          <Priority el={el} />
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
