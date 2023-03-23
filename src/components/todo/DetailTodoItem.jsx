import React from 'react';
import { DDay, TodoDetailHeader, TodoDetailItem } from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';

const DetailTodoItem = () => {
  return (
    <DDay>
      <TodoDetailHeader>
        <div className='header'>
          <div className='title'>3월 6일 월요일</div>
        </div>
      </TodoDetailHeader>
      <TodoDetailItem>
        <div className='item'>
          <div className='flexLeft'>
            <div className='kr'>KR1</div>
            <div className='krBox'>
              <div className='krTitle'>KR1에 따른 To-Do 내용</div>
              <div className='krManager'>
                <div className='dateGreen'>
                  3월 4일 11시 00분 ~ 오늘 11시 00분
                </div>
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
    </DDay>
  );
};

export default DetailTodoItem;
