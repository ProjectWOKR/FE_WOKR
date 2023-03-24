import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { GetOKR, GetTodo } from '../../apis/apiGET';
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

const TodoItem = () => {
  const queryClient = useQueryClient();

  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      console.log(response);
    },
    onError: response => {},
  });

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

  // 체크 수정
  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      queryClient.invalidateQueries(['TODO']);
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
    setPatchTodoInfo({
      id,
      todo,
      memo,
      startDate,
      startDateTime,
      endDate,
      endDateTime,
      priority,
    });
    setTodoModalOn(!todoModalOn);
  };
  // console.log(filterArray);
  return (
    <>
      {filterArray?.map((el, index) => (
        <div className='todo' key={index}>
          <div className='title' style={{ color: el.color }}>
            {el.keyResultId === null ? 'none' : 'KR'}
          </div>
          <div className='detail'>
            <div
              className='name_date'
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
              <div>{el.toDo}</div>
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
      <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal>
      <Toast />
    </>
  );
};

export default TodoItem;
