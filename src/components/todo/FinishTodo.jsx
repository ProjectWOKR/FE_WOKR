import React, { useState } from 'react';
import { Finsh, TodoDetailHeader, TodoDetailItem } from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';
import { useQuery } from '@tanstack/react-query';
import { GetPostTodo } from '../../apis/apiGET';

const FinishTodo = () => {
  const [show, setShow] = useState(true);

  return (
    <Finsh>
      <TodoDetailHeader>
        <div className='header'>
          <div className='down' onClick={() => setShow(!show)}></div>
          <div className='title'>완료한 리스트</div>
        </div>
      </TodoDetailHeader>
      {show ? (
        <TodoDetailItem>
          <div className='item'>
            <div className='flexLeft'>
              <div className='kr'>KR1</div>
              <div className='krBox'>
                <div className='fKrTitle'>KR1에 따른 To-Do 내용</div>
                <div className='krManager'>
                  <div className='fDate'>3월 1일 ~ 3월 3일</div>
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
          <div className='item'>
            <div className='flexLeft'>
              <div className='kr'>KR1</div>
              <div className='krBox'>
                <div className='fKrTitle'>KR1에 따른 To-Do 내용</div>
                <div className='krManager'>
                  <div className='fDate'>3월 1일 ~ 3월 3일</div>
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
      )}
    </Finsh>
  );
};

export default FinishTodo;
