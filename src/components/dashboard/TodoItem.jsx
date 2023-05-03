import { GetCompletionTodo, GetTodo } from '../../apis/apiGET';
import { PatchCheck } from '../../apis/apiPATCH';
import { PostCompletionTodo, PostProgressTodo } from '../../apis/apiPOST';
import checkFull from '../../assets/checkFull.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import { change, myChange, myTodo, patchTodoInfo } from '../../store/store';
import Toast from '../global/Toast';
import Potal from '../global/globalModal/Potal';
import TodoPathModal from '../global/globalModal/TodoPathModal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';

const TodoItem = () => {
  const queryClient = useQueryClient();

  const [count, setCount] = useRecoilState(change);
  // console.log(count);

  const [info, setInfo] = useRecoilState(myTodo);
  // console.log('myTodoInfo :', info);
  const [progress, setProgress] = useState([]);
  const [completion, setCompletion] = useState([]);

  // console.log('진행 중 :', progress);
  // console.log('완료 :', completion);

  const { mutate: progressTodo } = useMutation(PostProgressTodo, {
    onSuccess: data => {
      // console.log(data);
      setProgress(data);
    },
  });

  const { mutate: completionTodo } = useMutation(PostCompletionTodo, {
    onSuccess: data => {
      // console.log(data);
      setCompletion(data);
    },
  });

  useEffect(() => {
    if (
      info.targetDate !== null &&
      info.KeyResultIds !== null &&
      info.teamMembers !== null &&
      info.KeyResultIds.length !== 0
    ) {
      console.log('통신한다');
      progressTodo({ info });
      completionTodo({ info });
    }
  }, [count, info]);

  // 체크 수정
  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 완료',
        });
      }
      queryClient.invalidateQueries(['TODO']);
      queryClient.invalidateQueries(['completionTodo']);
      setCount(count - 1);
    },
    onError: response => {},
  });

  const Check = ({ data }) => {
    const onClickCheck = () => {
      // console.log('누름');
      const id = data.toDoId;
      patchCheckmutate({ id });
      // progressTodo({ info });
      // completionTodo({ info });
      // toast('할 일을 완료했습니다.');
    };

    if (data.completion) {
      return (
        <img
          className='completion'
          src={checkFull}
          alt='checked'
          onClick={onClickCheck}
        />
      );
    } else {
      return <div className='notCompletion' onClick={onClickCheck}></div>;
    }

    // return <div className='check' onClick={onClickCheck} />;
  };

  const Priority = ({ data }) => {
    if (data.priority === 1) {
      return <img className='priority' src={red} alt='' />;
    } else if (data.priority === 2) {
      return <img className='priority' src={yellow} alt='' />;
    } else if (data.priority === 3) {
      return <img className='priority' src={blue} alt='' />;
    } else {
      return;
    }
  };

  const [todoModalOn, setTodoModalOn] = useState(false);

  const onTodoCloseModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const setPatchTodoInfo = useSetRecoilState(patchTodoInfo);

  const patchTodo = (
    id,
    toDo,
    memo,
    startDate,
    startDateTime,
    endDate,
    endDateTime,
    priority
  ) => {
    // console.log(todo);
    setPatchTodoInfo({
      id,
      toDo,
      memo,
      startDate,
      startDateTime,
      endDate,
      endDateTime,
      priority,
    });
    setTodoModalOn(!todoModalOn);
  };

  return (
    <>
      {progress?.map(el => (
        <React.Fragment key={el.userId}>
          {el.progressTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              <Check data={data} />
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div className='detail'>
                <div
                  className='nameDate'
                  onClick={() => {
                    patchTodo(
                      data.toDoId,
                      data.toDo,
                      data.memo,
                      data.startDate,
                      data.startDateTime,
                      data.endDate,
                      data.endDateTime,
                      data.priority
                    );
                  }}>
                  <div className='todoName'>{data.toDo}</div>
                  {data.memo === '' ? null : (
                    <div className='memo'>{data.memo}</div>
                  )}
                  <p>
                    {data.fstartDate} - {data.fendDate}
                  </p>
                </div>
              </div>
              <Priority data={data} />
            </div>
          ))}
        </React.Fragment>
      ))}

      {completion?.map(el => (
        <React.Fragment key={el.userId}>
          {el.completionTodo.map(data => (
            <div className='todo' key={data.toDoId}>
              <Check data={data} />
              <div className='title' style={{ color: data.color }}>
                {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
              </div>
              <div
                className='detail'
                style={{
                  textDecoration: 'line-through',
                  color: 'rgb(155, 155, 155)',
                }}>
                <div
                  className='nameDate'
                  onClick={() => {
                    patchTodo(
                      data.toDoId,
                      data.toDo,
                      data.memo,
                      data.startDate,
                      data.startDateTime,
                      data.endDate,
                      data.endDateTime,
                      data.priority
                    );
                  }}>
                  <div
                    className='todoName'
                    style={{ color: 'rgb(155, 155, 155)' }}>
                    {data.toDo}
                  </div>
                  {data.memo === '' ? null : (
                    <div
                      className='memo'
                      style={{ color: 'rgb(155, 155, 155)' }}>
                      {data.memo}
                    </div>
                  )}
                  <p style={{ color: 'rgb(155, 155, 155)' }}>
                    {data.fstartDate} - {data.fendDate}
                  </p>
                </div>
              </div>
              <Priority data={data} />
            </div>
          ))}
        </React.Fragment>
      ))}
      <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal>
      <Toast />
    </>
  );
};

export default TodoItem;
