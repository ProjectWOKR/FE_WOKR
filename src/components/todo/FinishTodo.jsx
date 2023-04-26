import { GetPostTodo } from '../../apis/apiGET';
import { PatchCheck } from '../../apis/apiPATCH';
import badgeS from '../../assets/badgeS.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import {
  Finsh,
  TodoDetailHeader,
  TodoDetailItem,
} from '../../styles/tododetail.styled';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FinishTodo = ({ el }) => {
  const [show, setShow] = useState(true);

  // console.log('el :', el);

  const Priority = () => {
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
      queryClient.invalidateQueries(['ALLTODO']);
      queryClient.invalidateQueries(['PASTTODO']);
    },
    onError: response => {},
  });

  const Check = ({ ct }) => {
    const onClickCheck = () => {
      const id = ct.toDoId;
      patchCheckmutate({ id });
      toast('To Do의 완료를 수정했습니다.');
    };

    return (
      <div
        className={ct.completion === true ? 'checkbg' : 'check'}
        onClick={onClickCheck}
      />
    );
  };

  const Title = ({ ct }) => {
    // console.log(ct);
    if (ct.color === null) {
      return (
        <div className='colorNull' style={{ color: '#9b9b9b' }}>
          {ct.keyResultId === null ? 'none' : `KR${ct.krNumber}`}
        </div>
      );
    }
    return (
      <div className='kr' style={{ color: ct.color }}>
        {ct.keyResultId === null ? 'none' : `KR${ct.krNumber}`}
      </div>
    );
  };

  const FilterMyTodo = ({ ct }) => {
    // console.log('ct :', ct);
    // console.log(ct.myTodo === true);
    if (ct.myToDo === true) {
      return (
        <div className='item'>
          <div
            className='flexLeft'
            style={
              ct.completion === true
                ? { cursor: 'default' }
                : { cursor: 'pointer' }
            }>
            <Title ct={ct} />
            <div className='krBox' title={ct.memo}>
              <div className='fKrTitle'>{ct.toDo}</div>
              <div className='krManager'>
                <div className='fDate'>
                  {ct.fstartDate}
                  {ct.startDateTime === '00:00' ? null : ct.startDateTime}~
                  {ct.fendDate}
                  {ct.endDateTime === '00:00' ? null : ct.endDateTime}
                </div>
              </div>
            </div>
          </div>
          <div className='flexRight'>
            <Priority ct={ct} />
            <Check ct={ct} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='item'>
          <div
            className='flexLeft'
            style={
              ct.completion === true
                ? { cursor: 'default' }
                : { cursor: 'pointer' }
            }>
            <Title ct={ct} />
            <div className='krBox' title={ct.memo}>
              <div className='fKrTitle'>{ct.toDo}</div>
              <div className='krManager'>
                <div className='fDate'>
                  {ct.fstartDate}
                  {ct.startDateTime === '00:00' ? null : ct.startDateTime}~{' '}
                  {ct.fendDate}
                  {ct.endDateTime === '00:00' ? null : ct.endDateTime}
                </div>
                <div className='kmName'>{ct.createUser}</div>
                <img src={badgeS} alt='' />
              </div>
            </div>
          </div>
          <div className='flexRight'>
            <Priority ct={ct} />
            <div className='another'></div>
          </div>
        </div>
      );
    }
  };

  return (
    <Finsh>
      <TodoDetailHeader>
        <div className='header'>
          <div className='down' onClick={() => setShow(!show)}></div>
          <div className='title'>완료한 리스트</div>
        </div>
      </TodoDetailHeader>

      {el.completionTodo.length === 0 ? (
        <div className='noCompl' style={{ cursor: 'default' }}>
          완료한 리스트가 없습니다.
        </div>
      ) : (
        el.completionTodo?.map(ct => (
          <TodoDetailItem
            key={ct.toDoId}
            style={show ? { display: 'flex' } : { display: 'none' }}>
            <FilterMyTodo ct={ct} />
          </TodoDetailItem>
        ))
      )}
    </Finsh>
  );
};

export default FinishTodo;
