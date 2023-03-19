import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { GetTodo } from '../../apis/apiGET';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import blue from '../../assets/todoBlue.png';
import check from '../../assets/check.png';

const TodoItem = () => {
  // console.log(getTodo);

  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      // console.log(getTodo);
    },
    onError: response => {},
  });

  const [completionInfo, setCompletionInfo] = useState({
    completion: false,
  });

  const Check = ({ el }) => {
    // console.log(el);
    const onClickCheck = () => {
      console.log('눌림');
      // if (el.completion === true) {
      //   setCompletionInfo({ ...completionInfo, completion: false });
      //   console.log(el.completion);
      //   console.log(completionInfo);
      // } else {
      //   setCompletionInfo({ ...completionInfo, completion: true });
      //   console.log(el.completion);
      //   console.log(completionInfo);
      // }
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
          <div className='title'>none</div>
          <div className='detail'>
            <div className='name_date'>
              <div>{el.toDo}</div>
              <p>2월 3일</p>
            </div>
            <div className='priorityBox'>
              {/* <img src={flag} alt='' /> */}
              <Priority el={el} />
              {/* {el.completion === false ? (
                <div className='check' onClick={onClick} />
              ) : (
                <div className='check' onClick={onClick}>
                  <img src={check} alt='' />
                </div>
              )} */}
              <Check el={el} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
