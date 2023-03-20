import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { GetTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import check from '../../assets/check.png';

const TodoItem = () => {
  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      // console.log(response);
    },
    onError: response => {},
  });

  // 체크 확인
  const [completionInfo, setCompletionInfo] = useState({
    completion: false,
  });

  const Check = ({ el }) => {
    const onClickCheck = () => {
      console.log('눌림');
    };
    if (!el.completion) {
      return <div className='check' onClick={onClickCheck} />;
    } else {
      return (
        <div className='check' onClick={onClickCheck}>
          <img src={check} alt='' />
        </div>
      );
    }
  };

  const Priority = ({ el }) => {
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
    <>
      {getTodo?.map((el, index) => (
        <div className='todo' key={index}>
          <div className='title' style={{ color: el.color }}>
            none
          </div>
          <div className='detail'>
            <div className='name_date'>
              <div>{el.toDo}</div>
              <p>{el.fstartDate}</p>
            </div>
            <div className='priorityBox'>
              <Priority el={el} />
              <Check el={el} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
