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
    if (ct.myTodo === true) {
      return (
        <div className='item'>
          <div className='flexLeft'>
            <Title ct={ct} />
            <div className='krBox'>
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
            <div className='checkbg'></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='item'>
          <div className='flexLeft'>
            <Title ct={ct} />
            <div className='krBox'>
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
            <div className='checkbg'></div>
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

      {el.completionTodo.length === 0
        ? null
        : el.completionTodo?.map(ct => (
            <TodoDetailItem
              key={ct.toDoId}
              style={show ? { display: 'flex' } : { display: 'none' }}>
              {/* <div className='item'>
                <div className='flexLeft'>
                  <Title ct={ct} />
                  <div className='krBox'>
                    <div className='fKrTitle'>{ct.toDo}</div>
                    <div className='krManager'>
                      <div className='fDate'>
                        {ct.fstartDate}
                        {ct.startDateTime === '00:00' ? null : ct.startDateTime}
                        ~ {ct.fendDate}
                        {ct.endDateTime === '00:00' ? null : ct.endDateTime}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flexRight'>
                  <Priority ct={ct} />
                  <div className='checkbg'></div>
                </div>
              </div> */}
              <FilterMyTodo ct={ct} />
            </TodoDetailItem>
          ))}
    </Finsh>
  );
};

export default FinishTodo;
