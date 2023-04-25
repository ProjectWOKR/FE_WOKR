import { PatchCheck } from '../../apis/apiPATCH';
import badgeS from '../../assets/badgeS.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import { patchTodoInfo } from '../../store/store';
import {
  DDay,
  TodoDetailHeader,
  TodoDetailItem,
} from '../../styles/tododetail.styled';
import Potal from '../global/globalModal/Potal';
import TodoPathModal from '../global/globalModal/TodoPathModal';
import Filter from './Filter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

const DetailTodoItem = ({ el, today, tomorrow }) => {
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

  return (
    <>
      <DDay>
        <TodoDetailHeader>
          <div className='header'>
            <div className='title'>TODAY</div>
            <Filter />
            {/* <div className='title' id={el.targetDate}>
              {el.targetDate}
            </div> */}
          </div>
        </TodoDetailHeader>
        {/* <HavePt /> */}
      </DDay>
      {/* <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal> */}
    </>
  );
};

export default DetailTodoItem;
