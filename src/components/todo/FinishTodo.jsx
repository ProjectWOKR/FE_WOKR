import React, { useState } from 'react';
import { Finsh, TodoDetailHeader, TodoDetailItem } from './tododetail.styled';
import badgeS from '../../assets/badgeS.png';
import { useQuery } from '@tanstack/react-query';
import { GetPostTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';

const FinishTodo = ({ el }) => {
  const [show, setShow] = useState(true);

  // console.log('el :', el);

  const Priority = ({ ct }) => {
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

  return (
    <Finsh>
      <TodoDetailHeader>
        <div className='header'>
          <div className='down' onClick={() => setShow(!show)}></div>
          <div className='title'>완료한 리스트</div>
        </div>
      </TodoDetailHeader>

      {/* <TodoDetailItem style={show ? { display: 'flex' } : { display: 'none' }}>
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
      </TodoDetailItem> */}

      {el.completionTodo.length === 0
        ? null
        : el.completionTodo?.map(ct => (
            <TodoDetailItem
              key={ct.toDoId}
              style={show ? { display: 'flex' } : { display: 'none' }}>
              <div className='item'>
                <div className='flexLeft'>
                  <div className='kr'>KR1</div>
                  <div className='krBox'>
                    <div className='fKrTitle'>{ct.toDo}</div>
                    <div className='krManager'>
                      <div className='fDate'>
                        {ct.fstartDate}
                        {ct.startDateTime === '00:00' ? null : ct.startDateTime}
                        ~ {ct.fendDate}
                        {ct.endDateTime === '00:00' ? null : ct.endDateTime}
                      </div>
                      {/* <div className='kmName'>정혜민</div>
                      <img src={badgeS} alt='' /> */}
                    </div>
                  </div>
                </div>
                <div className='flexRight'>
                  <Priority ct={ct} />
                  <div className='checkbg'></div>
                </div>
              </div>
            </TodoDetailItem>
          ))}
    </Finsh>
  );
};

export default FinishTodo;
