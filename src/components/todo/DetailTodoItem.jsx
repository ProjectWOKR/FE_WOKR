import React from 'react';
import { DDay, TodoDetailHeader, TodoDetailItem } from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetAllTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import { PatchCheck } from '../../apis/apiPATCH';

const DetailTodoItem = ({ el, today, tomorrow }) => {
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

  // const KrColor = ({ pt }) => {
  //   // console.log(pt);
  //   // console.log(el);
  //   if (pt.color === null) {
  //     return (
  //       <div className='kr' style={{ color: 'rgb(155, 155, 155)' }}>
  //         none
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className='kr' style={{ color: pt.color }}>
  //         KR
  //       </div>
  //     );
  //   }
  // };

  const Title = ({ pt }) => {
    console.log(pt);
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

  //해당 날짜에 todo가 없을 때
  const HavePt = () => {
    // console.log(el);
    if (el.progressTodo.length === 0) {
      return (
        <TodoDetailItem>
          <div className='notHave'>이 날은 To Do가 없습니다.</div>
        </TodoDetailItem>
      );
    }
    return (
      <>
        {el.progressTodo.map(pt => (
          <TodoDetailItem key={pt.toDoId}>
            <div className='item'>
              <div className='flexLeft'>
                {/* <div className='kr'>KR1</div> */}
                <Title pt={pt} />
                <div className='krBox'>
                  <div className='krTitle'>{pt.toDo}</div>
                  <div className='krManager'>
                    <DateColor
                      el={el}
                      today={today}
                      tomorrow={tomorrow}
                      pt={pt}
                    />

                    {/* <div className='kmName'>정혜민</div>
                    <img src={badgeS} alt='' /> */}
                  </div>
                </div>
              </div>
              <div className='flexRight'>
                <Priority pt={pt} />
                <Check pt={pt} />
              </div>
            </div>
          </TodoDetailItem>
        ))}
      </>
    );
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

      {/* {el.progressTodo.map(pt => (
        <TodoDetailItem key={pt.toDoId}>
          <div className='item'>
            <div className='flexLeft'>
              <div className='kr'>KR1</div>
              <div className='krBox'>
                <div className='krTitle'>{pt.toDo}</div>
                <div className='krManager'>
                  <DateColor
                    el={el}
                    today={today}
                    tomorrow={tomorrow}
                    pt={pt}
                  />

                  <div className='kmName'>정혜민</div>
                    <img src={badgeS} alt='' />
                </div>
              </div>
            </div>
            <div className='flexRight'>
              <Priority pt={pt} />
              <Check pt={pt} />
            </div>
          </div>
        </TodoDetailItem>
      ))} */}

      <HavePt />
    </DDay>
  );
};

export default DetailTodoItem;
