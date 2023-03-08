import React from 'react';

const TodoItem = () => {
  return (
    <div className='todo'>
      <div className='title'>none</div>
      <div className='detail'>
        <div className='name_date'>
          <div>찰스 몸짱 만들기</div>
          <p>2월 3일</p>
        </div>
        <div className='priorityBox'>
          <div className='priority'></div>
          <div className='check'></div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
