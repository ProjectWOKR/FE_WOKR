import React, { useState } from 'react';
import {
  StPastTodo,
  TodoDetailHeader,
  TodoDetailItem,
} from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetPastTodo, GetUser } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import { PatchCheck } from '../../apis/apiPATCH';
import { styled } from 'styled-components';

const PastTodo = () => {
  const [show, setShow] = useState(false);

  const { data: getPastTodo } = useQuery(['PASTTODO'], GetPastTodo, {
    onSuccess: response => {
      console.log('기한만료 :', response);
    },
    onError: response => {
      console.log(response);
    },
  });

  const { data: getMember } = useQuery(['MEMBER'], GetUser, {
    onSuccess: response => {
      console.log('user :', response);
    },
    onError: response => {
      // console.log(response);
    },
  });

  const Title = ({ el }) => {
    if (el.color === null) {
      return (
        <div className='colorNull' style={{ color: '#9b9b9b' }}>
          {el.keyResultId === null ? 'none' : `KR${el.krNumber}`}
        </div>
      );
    }
    return (
      <div className='kr' style={{ color: el.color }}>
        {el.keyResultId === null ? 'none' : `KR${el.krNumber}`}
      </div>
    );
  };

  const Priority = ({ el }) => {
    // console.log(el.priority);
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
  const queryClient = useQueryClient();

  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      queryClient.invalidateQueries(['TODO']);
      queryClient.invalidateQueries(['PASTTODO']);
    },
    onError: response => {},
  });

  const Check = ({ el }) => {
    const onClickCheck = () => {
      const id = el.toDoId;
      patchCheckmutate({ id });
      // toast('할 일을 완료했습니다.');
    };

    return <div className='check' onClick={onClickCheck} />;
  };

  const FilterMyTodo = ({ el }) => {
    // console.log(el);
    if (el.myToDo === true) {
      return (
        <div className='item'>
          <div className='flexLeft'>
            <Title el={el} />
            <div className='krBox'>
              <div className='krTitle'>{el.toDo}</div>
              <div className='krManager'>
                <div className='date'>
                  {el.fstartDate} {el.fendDate}
                </div>
              </div>
            </div>
          </div>
          <div className='flexRight'>
            <Priority el={el} />
            <Check el={el} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='item'>
          <div className='flexLeft'>
            <Title el={el} />
            <div className='krBox'>
              <div className='krTitle'>{el.toDo}</div>
              <div className='krManager'>
                <div className='date'>
                  {el.fstartDate} ~ {el.fendDate}
                </div>
                <div className='kmName'>{el.createUser}</div>
                <img src={badgeS} alt='' />
              </div>
            </div>
          </div>
          <div className='flexRight'>
            <Priority el={el} />
            <div className='another' />
          </div>
        </div>
      );
    }
  };

  return (
    <StPastTodo>
      <TodoDetailHeader>
        <div className='header'>
          {show ? (
            <div className='up' onClick={() => setShow(!show)} />
          ) : (
            <div className='down' onClick={() => setShow(!show)} />
          )}
          <div className='title'>기한이 지난</div>
        </div>
      </TodoDetailHeader>

      {getPastTodo?.map(el => (
        <TodoDetailItem
          key={el.toDoId}
          style={{ display: show ? 'flex' : 'none' }}>
          <FilterMyTodo el={el} />
        </TodoDetailItem>
      ))}
    </StPastTodo>
  );
};

export default PastTodo;
