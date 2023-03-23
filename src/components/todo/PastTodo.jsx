import React, { useState } from 'react';
import {
  StPastTodo,
  TodoDetailHeader,
  TodoDetailItem,
} from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';
import { useQuery } from '@tanstack/react-query';
import { GetPastTodo } from '../../apis/apiGET';

const PastTodo = () => {
  const [show, setShow] = useState(true);

  const { data: getPastTodo } = useQuery(['POSTTODO'], GetPastTodo, {
    onSuccess: response => {
      console.log('기한만료 :', response);
    },
    onError: response => {
      console.log(response);
    },
  });
  return (
    <StPastTodo>
      <TodoDetailHeader>
        <div className='header'>
          <div className='down' onClick={() => setShow(!show)}></div>
          <div className='title'>기한이 지난</div>
        </div>
      </TodoDetailHeader>
      {show ? (
        <TodoDetailItem>
          <div className='item'>
            <div className='flexLeft'>
              <div className='kr'>KR1</div>
              <div className='krBox'>
                <div className='krTitle'>KR1에 따른 To-Do 내용</div>
                <div className='krManager'>
                  <div className='date'>3월 1일 ~ 3월 3일</div>
                  <div className='kmName'>정혜민</div>
                  <img src={badgeS} alt='' />
                </div>
              </div>
            </div>
            <div className='flexRight'>
              <div className='flag'></div>
              <div className='check'></div>
            </div>
          </div>
        </TodoDetailItem>
      ) : (
        <TodoDetailItem style={{ display: 'none' }}>
          <div className='flexLeft'>
            <div className='kr'>KR1</div>
            <div className='krBox'>
              <div className='krTitle'>KR1에 따른 To-Do 내용</div>
              <div className='krManager'>
                <div className='date'>3월 1일 ~ 3월 3일</div>
                <div className='kmName'>정혜민</div>
                <img src={badgeS} alt='' />
              </div>
            </div>
          </div>
          <div className='flexRight'>
            <div className='flag'></div>
            <div className='check'></div>
          </div>
        </TodoDetailItem>
      )}
    </StPastTodo>
  );
};

export default PastTodo;
