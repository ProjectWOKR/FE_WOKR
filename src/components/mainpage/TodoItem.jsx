import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { GetOKR, GetTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import { PatchCheck } from '../../apis/apiPATCH';
import { toast } from 'react-toastify';
import Toast from '../global/Toast';

const TodoItem = () => {
  const queryClient = useQueryClient();

  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      // console.log(response);
    },
    onError: response => {},
  });

  // filter 함수 사용
  const filterArray = getTodo?.filter(el => el.completion === false);
  // console.log(filterArray);

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

  // const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
  //   onSuccess: response => {
  //     console.log(response);
  //     console.log('filter :', filterArray);
  //   },
  //   onError: response => {},
  // });

  // const Title = (el, index) => {
  //   console.log(el);
  //   console.log('index :', index);
  //   return <div className='title'></div>;
  // };

  return (
    <>
      {filterArray?.map((el, index) => (
        <div className='todo' key={index}>
          <div className='title' style={{ color: el.color }}>
            none
          </div>
          <div className='detail'>
            <div className='name_date'>
              <div>{el.toDo}</div>
              <p>{el.fendDate} 까지</p>
            </div>
            <div className='priorityBox'>
              <Priority el={el} />
              <Check el={el} />
            </div>
          </div>
        </div>
      ))}
      <Toast />
    </>
  );
};

export default TodoItem;
