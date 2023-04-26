import { GetPastTodo, GetUser } from '../../apis/apiGET';
import { PatchCheck } from '../../apis/apiPATCH';
import badgeS from '../../assets/badgeS.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import { patchTodoInfo } from '../../store/store';
import {
  StPastTodo,
  TodoDetailHeader,
  TodoDetailItem,
} from '../../styles/tododetail.styled';
import Potal from '../global/globalModal/Potal';
import TodoPathModal from '../global/globalModal/TodoPathModal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

const PastTodo = () => {
  const [show, setShow] = useState(true);

  const { data: getPastTodo } = useQuery(['PASTTODO'], GetPastTodo, {
    onSuccess: response => {
      // console.log('기한만료 :', response);
    },
    onError: response => {
      // console.log(response);
    },
  });

  const { data: getMember } = useQuery(['MEMBER'], GetUser, {
    onSuccess: response => {
      // console.log('user :', response);
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
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 완료',
        });
      }
      queryClient.invalidateQueries(['ALLTODO']);
      queryClient.invalidateQueries(['PASTTODO']);
      toast('TODO를 완료했습니다');
    },
    onError: response => {
      toast(`${response.response.data}`);
    },
  });

  const Check = ({ el }) => {
    const onClickCheck = () => {
      const id = el.toDoId;
      console.log(id);
      patchCheckmutate({ id });
    };

    return <div className='check' onClick={onClickCheck} />;
  };

  const [todoModalOn, setTodoModalOn] = useState(false);

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

  const FilterMyTodo = ({ el }) => {
    // console.log(el.myToDo);
    if (el.myToDo === true) {
      return (
        <div className='item'>
          <div
            className='flexLeft'
            style={{ cursor: 'pointer' }}
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
            <Title el={el} />
            <div className='krBox' title={el.memo}>
              <div className='krTitle'>{el.toDo}</div>
              <div className='krManager'>
                <div className='date'>
                  {el.fstartDate} ~ {el.fendDate}
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
          <div className='flexLeft' style={{ cursor: 'pointer' }}>
            <Title el={el} />
            <div className='krBox' title={el.memo}>
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
      <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal>
    </StPastTodo>
  );
};

export default PastTodo;
