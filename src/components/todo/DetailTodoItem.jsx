import React from 'react';
import { DDay, TodoDetailHeader, TodoDetailItem } from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetAllTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import { PatchCheck } from '../../apis/apiPATCH';
import { toast } from 'react-toastify';

const DetailTodoItem = ({ el, today, tomorrow }) => {
  // console.log(new Date('2023-03-14') < new Date('2023-03-15'));
  // console.log(new Date(el.progressTodo.startDate));
  // console.log(date > new Date(el.progressTodo.startDate));
  // console.log('---------------');
  // console.log(new Date(`2023-03-29`)); // 됨.

  // console.log(Number(date.substr(0, 2) - 1));
  // console.log('el:', el);
  // const { data: getAllTodo } = useQuery(['ALLTODO'], GetAllTodo, {
  //   onSuccess: response => {
  //     console.log('todo :', response);
  //   },
  //   onError: response => {
  //     // console.log(response.response.data);
  //   },
  // });
  const queryClient = useQueryClient();

  // 우선순위
  const Priority = ({ pt }) => {
    // console.log('pt :', pt);
    if (pt.priority === 1) {
      return <img src={red} alt='' />;
    } else if (pt.priority === 2) {
      return <img src={yellow} alt='' />;
    } else if (pt.priority === 3) {
      return <img src={blue} alt='' />;
    } else {
      return;
    }
  };

  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      queryClient.invalidateQueries(['ALLTODO']);
      queryClient.invalidateQueries(['PASTTODO']);
    },
    onError: response => {},
  });

  // 체크
  const Check = ({ pt }) => {
    const onClickCheck = () => {
      const id = pt.toDoId;
      patchCheckmutate({ id });
      toast('To Do를 완료했습니다.');
    };

    return <div className='check' onClick={onClickCheck} />;
  };

  //오늘, 내일 글씨
  const DateColor = ({ el, today, tomorrow, pt }) => {
    if (el.targetDate === today) {
      return (
        <div className='dateGreen'>
          {pt.fstartDate}
          {pt.startDateTime === '00:00' ? null : pt.startDateTime} ~{' '}
          {pt.fendDate}
          {pt.endDateTime === '00:00' ? null : pt.endDateTime}
        </div>
      );
    } else if (el.targetDate === tomorrow) {
      return (
        <div className='dateYellow'>
          {pt.fstartDate}
          {pt.startDateTime === '00:00' ? null : pt.startDateTime} ~{' '}
          {pt.fendDate}
          {pt.endDateTime === '00:00' ? null : pt.endDateTime}
        </div>
      );
    } else {
      return (
        <div className='normalDate'>
          {pt.fstartDate}
          {pt.startDateTime === '00:00' ? null : pt.startDateTime} ~{' '}
          {pt.fendDate}
          {pt.endDateTime === '00:00' ? null : pt.endDateTime}
        </div>
      );
    }
  };

  const Title = ({ pt }) => {
    // console.log(pt);
    if (pt.color === null) {
      return (
        <div className='colorNull' style={{ color: '#9b9b9b' }}>
          {pt.keyResultId === null ? 'none' : `KR${pt.krNumber}`}
        </div>
      );
    }
    return (
      <div className='kr' style={{ color: pt.color }}>
        {pt.keyResultId === null ? 'none' : `KR${pt.krNumber}`}
      </div>
    );
  };

  const FilterMyTodo = ({ pt }) => {
    // console.log(pt.startDate);
    let date = new Date(
      `2023-${el.targetDate.substr(0, 2)}-${el.targetDate.substr(4, 2)}`
    );
    // console.log(date, ' :::', new Date(pt.startDate));
    if (pt.myToDo === true) {
      <div className='item'>
        <div className='flexLeft'>
          <Title pt={pt} />
          <div className='krBox'>
            <div className='krTitle'>{pt.toDo}</div>
            <div className='krManager'>
              <DateColor el={el} today={today} tomorrow={tomorrow} pt={pt} />
            </div>
          </div>
        </div>
        <div className='flexRight'>
          <Priority pt={pt} />
          <Check pt={pt} />
        </div>
      </div>;
    }
    // else if (date <= new Date(pt.startDate) === true) {
    //   return (
    //     <div className='notHave'>To Do가 해당 날짜 보다 미래에 있습니다.</div>
    //   );
    // }
    else {
      return (
        <div className='item'>
          <div className='flexLeft'>
            <Title pt={pt} />
            <div className='krBox'>
              <div className='krTitle'>{pt.toDo}</div>
              <div className='krManager'>
                <DateColor el={el} today={today} tomorrow={tomorrow} pt={pt} />

                <div className='kmName'>{pt.createUser}</div>
                <img src={badgeS} alt='' />
              </div>
            </div>
          </div>
          <div className='flexRight'>
            <Priority pt={pt} />
            <div className='another' />
          </div>
        </div>
      );
    }
  };

  //해당 날짜에 todo가 없을 때
  const HavePt = () => {
    let date = new Date(
      `2023-${el.targetDate.substr(0, 2)}-${el.targetDate.substr(4, 2)}`
    );
    if (el.progressTodo.length === 0) {
      return (
        <TodoDetailItem>
          <div className='notHave'>이 날은 진행중인 To Do가 없습니다.</div>
        </TodoDetailItem>
      );
    } else {
      return (
        <>
          {el.progressTodo.map(pt => (
            <TodoDetailItem key={pt.toDoId}>
              <FilterMyTodo pt={pt} />
            </TodoDetailItem>
          ))}
        </>
      );
    }
  };

  return (
    <DDay>
      <TodoDetailHeader>
        <div className='header'>
          <div className='title' id={el.targetDate}>
            {el.targetDate}
          </div>
        </div>
      </TodoDetailHeader>
      <HavePt />
    </DDay>
  );
};

export default DetailTodoItem;
