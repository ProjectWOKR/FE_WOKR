import { PatchCheck, PatchTodo } from '../../apis/apiPATCH';
import {
  PostCompletionTodo,
  PostExpirationTodo,
  PostProgressTodo,
} from '../../apis/apiPOST';
import others from '../../assets/badgeS.png';
import checkFull from '../../assets/checkFull.png';
import lock from '../../assets/lock.png';
import blue from '../../assets/todoBlue.png';
import red from '../../assets/todoRed.png';
import yellow from '../../assets/todoYellow.png';
import warn from '../../assets/warn.png';
import {
  change,
  clickDate,
  completionArray,
  completionAtom,
  expirationAtom,
  filterTeamMemberSelector,
  getOKRData,
  isDone,
  krDataAtom,
  myUserIdSelecctor,
  patchTodoInfo,
  progressAtom,
  teamMemberTodoSelector,
  todayFormat,
  todoDateInfo,
  userId,
  userInfo,
} from '../../store/store';
import {
  StCompletionTodo,
  StExpirationTodo,
  StProgressTodo,
} from '../../styles/todo.styled';
import { DDay, TodoDetailHeader } from '../../styles/tododetail.styled';
import Loading from '../global/Loading';
import Potal from '../global/globalModal/Potal';
import TodoPathModal from '../global/globalModal/TodoPathModal';
import Filter from './Filter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue } from 'recoil';

const DetailTodoItem = () => {
  const queryClient = useQueryClient();

  const [todoModalOn, setTodoModalOn] = useState(false);
  const [patchtodoInfo, setPatchTodoInfo] = useRecoilState(patchTodoInfo);

  const todayData = localStorage.getItem('today');

  const onTodoCloseModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const patchTodo = (
    id,
    todo,
    memo,
    startDate,
    startDateTime,
    endDate,
    endDateTime,
    priority
  ) => {
    setPatchTodoInfo({
      id,
      toDo: todo,
      memo,
      startDate,
      startDateTime,
      endDate,
      endDateTime,
      priority,
    });
    setTodoModalOn(!todoModalOn);
  };
  // 기간 만료 todo 불러오기

  const [info, setInfo] = useRecoilState(todoDateInfo);
  const [isCompletion, setIsCompletion] = useRecoilState(isDone);
  // console.log(isCompletion);

  const [expiration, setExpiration] = useRecoilState(expirationAtom);
  const [progress, setProgress] = useRecoilState(progressAtom);
  const [completion, setCompletion] = useRecoilState(completionAtom);

  // console.log('진행 중 :', progress);
  // console.log('완료 :', completion);
  // console.log('기간만료 :', expiration);

  // 기한 만료
  const { mutate: expirationTodo } = useMutation(PostExpirationTodo, {
    onSuccess: response => {
      setExpiration(response);
    },
  });

  // 진행중
  const { mutate: progressTodo } = useMutation(PostProgressTodo, {
    onSuccess: response => {
      setProgress(response);
    },
  });

  // 완료
  const { mutate: completionTodo } = useMutation(PostCompletionTodo, {
    onSuccess: response => {
      setCompletion(response);
    },
  });

  // console.log(expiration);

  // 기한 만료 컴포넌트
  const ExpirationTodo = () => {
    if (expiration?.length === 0) {
      return;
    } else {
      return expiration.map((el, index) => (
        <>
          <h2>기한 만료 To - Do</h2>
          <StExpirationTodo key={index}>
            {el.expirationTodo.map(data => (
              <div className='todo' key={data.toDoId}>
                {el.myToDo ? (
                  <Check data={data} />
                ) : (
                  <img src={lock} alt='lock' className='lock' />
                )}
                <div className='title' style={{ color: data.color }}>
                  {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
                </div>
                {el.myToDo ? (
                  <div className='detail'>
                    <div
                      className='nameDate'
                      onClick={() =>
                        patchTodo(
                          data.toDoId,
                          data.toDo,
                          data.memo,
                          data.startDate,
                          data.startDateTime,
                          data.endDate,
                          data.endDateTime,
                          data.priority
                        )
                      }>
                      <div className='todoName'>{data.toDo}</div>
                      {data.memo === '' ? null : (
                        <div className='memo'>{data.memo}</div>
                      )}

                      <p className='mine'>
                        <img src={warn} alt='warn' className='warn' />
                        {data.fstartDate} - {data.fendDate}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='detail'>
                    <div className='nameDate' style={{ cursor: 'default' }}>
                      <div className='todoName'>{data.toDo}</div>
                      {data.memo === '' ? null : (
                        <div className='memo'>{data.memo}</div>
                      )}

                      <p className='notMine'>
                        <img src={warn} alt='warn' className='warn' />
                        <span>
                          {data.fstartDate} - {data.fendDate}
                        </span>
                        <span className='createUser'>{el.createUser}</span>
                        <img src={others} alt='others' className='other' />
                      </p>
                    </div>
                  </div>
                )}

                <Priority data={data} />
              </div>
            ))}
          </StExpirationTodo>
        </>
      ));
    }
  };

  // 진행중  컴포넌트
  const ProgressTodo = () => {
    if (progress?.length === 0) {
      return;
    } else {
      return (
        <>
          <h2>진행중인 To - Do</h2>
          {progress.map((el, index) => (
            <StProgressTodo key={index}>
              {el.progressTodo.map(data => (
                <div className='todo' key={data.toDoId}>
                  {el.myToDo ? (
                    <Check data={data} />
                  ) : (
                    <img src={lock} alt='lock' className='lock' />
                  )}

                  <div className='title' style={{ color: data.color }}>
                    {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
                  </div>

                  {el.myToDo ? (
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
                          expirationTodo({ info });
                          progressTodo({ info });
                          completionTodo({ info });
                        }}>
                        <div className='todoName'>{data.toDo}</div>
                        {data.memo === '' ? null : (
                          <div className='memo'>{data.memo}</div>
                        )}

                        <p className='mine'>
                          {data.fstartDate} - {data.fendDate}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='detail'>
                      <div className='nameDate' style={{ cursor: 'default' }}>
                        <div
                          className='todoName'
                          style={
                            data.memo === '' ? { marginBottom: '5px' } : null
                          }>
                          {data.toDo}
                        </div>
                        {data.memo === '' ? null : (
                          <div className='memo'>{data.memo}</div>
                        )}

                        <p className='notMine'>
                          <span>
                            {data.fstartDate} - {data.fendDate}
                          </span>
                          <span className='createUser'>{el.createUser}</span>
                          <img src={others} alt='others' className='other' />
                        </p>
                      </div>
                    </div>
                  )}

                  <Priority data={data} />
                </div>
              ))}
            </StProgressTodo>
          ))}
        </>
      );
    }
  };

  //완료 컴포넌트
  const CompletionTodo = () => {
    if (completion?.length === 0) {
      return;
    } else {
      return (
        <>
          <h2>완료한 To - Do</h2>

          {completion.map((el, index) => (
            <StCompletionTodo key={index}>
              {el.completionTodo.map(data => (
                <div className='todo' key={data.toDoId}>
                  {el.myToDo ? (
                    <Check data={data} />
                  ) : (
                    <img src={lock} alt='lock' className='lock' />
                  )}
                  <div className='title' style={{ color: data.color }}>
                    {data.keyResultId === null ? 'None' : `KR${data.krNumber}`}
                  </div>

                  {el.myToDo ? (
                    <div className='detail'>
                      <div
                        className='nameDate'
                        onClick={() =>
                          patchTodo(
                            data.toDoId,
                            data.toDo,
                            data.memo,
                            data.startDate,
                            data.startDateTime,
                            data.endDate,
                            data.endDateTime,
                            data.priority
                          )
                        }>
                        <div className='todoName'>{data.toDo}</div>
                        {data.memo === '' ? null : (
                          <div className='memo'>{data.memo}</div>
                        )}

                        <p className='mine'>
                          {data.fstartDate} - {data.fendDate}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='detail'>
                      <div className='nameDate' style={{ cursor: 'default' }}>
                        <div className='todoName'>{data.toDo}</div>
                        {data.memo === '' ? null : (
                          <div className='memo'>{data.memo}</div>
                        )}

                        <p className='notMine'>
                          <span>
                            {data.fstartDate} - {data.fendDate}
                          </span>
                          <span className='createUser'>{el.createUser}</span>
                          <img src={others} alt='others' className='other' />
                        </p>
                      </div>
                    </div>
                  )}

                  <Priority data={data} />
                </div>
              ))}
            </StCompletionTodo>
          ))}
        </>
      );
    }
  };

  const { mutate: patchCheckmutate } = useMutation(PatchCheck, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'TODO 완료',
        });
      }
      queryClient.invalidateQueries(['ToDo']);

      expirationTodo({ info });
      progressTodo({ info });
      completionTodo({ info });
    },
    onError: response => {
      // console.log(response);
    },
  });

  const Check = ({ data }) => {
    // console.log(data);
    const onClickCheck = () => {
      const id = data.toDoId;
      patchCheckmutate({ id });
      toast('수정했습니다.');
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

  useEffect(() => {
    if (
      info.targetDate !== null &&
      info.KeyResultIds !== null &&
      info.teamMembers !== null &&
      info.KeyResultIds.length !== 0 &&
      // info.KeyResultIds.length === 0 &&
      isCompletion.length !== 0 &&
      (isCompletion.includes('done') === true ||
        isCompletion.includes('notDone') === true)
    ) {
      expirationTodo({ info });
      progressTodo({ info });
      completionTodo({ info });
    }
  }, [info, isCompletion]);

  // console.log(info);
  // console.log(isCompletion);

  return (
    <>
      <DDay>
        <TodoDetailHeader>
          <div className='header'>
            <div className='title'>
              {info?.targetDate === todayData
                ? 'Today'
                : `${info?.targetDate?.split('-')[1]}월 ${
                    info?.targetDate?.split('-')[2]
                  }일`}
            </div>
            <Filter />
          </div>
        </TodoDetailHeader>
      </DDay>

      {/* Kr을 하나라도 선택하고 완료일 때 */}
      {isCompletion.length === 1 &&
      isCompletion.includes('done') &&
      info.KeyResultIds.length !== 0 &&
      completion.length !== 0 ? (
        <CompletionTodo />
      ) : // Kr을 하나라도 선택하고 미완료일 때
      isCompletion.length === 1 &&
        isCompletion.includes('notDone') &&
        info.KeyResultIds.length !== 0 ? (
        <>
          <ProgressTodo />
          <ExpirationTodo />
        </>
      ) : // kr을 하나 이상 선택하고, 완료를 선택했는데, 데이터가 없을 때
      isCompletion.length === 1 &&
        isCompletion.includes('done') &&
        completion?.length === 0 &&
        info.KeyResultIds.length !== 0 ? (
        <h2>해당 kr의 todo가 없음</h2>
      ) : // kr을 하나 이상 선택하고, 미완료를 선택했는데, 데이터가 없을 때
      isCompletion.length === 1 &&
        isCompletion.includes('notDone') &&
        progress?.length === 0 &&
        expiration?.length === 0 &&
        info.KeyResultIds.length !== 0 ? (
        <h2>해당 kr의 todo가 없음</h2>
      ) : // 완료 필터가 둘 다 선택되지 않았을 때
      isCompletion.length === 0 ? (
        <>
          <h2 className='result'>검색결과 없음</h2>
          <h3 className='errorMsg'>완료 필터링을 확인해주세요.</h3>
        </>
      ) : // Kr을 선택하지 않고, 완료 필터링도 선택하지 않았을 때
      isCompletion.length === 0 && info.KeyResultIds.length === 0 ? (
        <>
          <h2 className='result'>검색결과 없음</h2>
          <h3 className='errorMsg'>둘다 없음</h3>
        </>
      ) : //  kr을 선택하지 않았을 때
      info.KeyResultIds.length === 0 ? (
        <>
          <h2 className='result'>검색결과 없음</h2>
          <h3 className='errorMsg'>KR을 선택하지 않았습니다.</h3>
        </>
      ) : expiration?.length === 0 &&
        progress?.length === 0 &&
        completion?.length === 0 ? (
        <>
          <h2 className='noAny'>등록된 To-Do가 없습니다.</h2>
          <h3>To - Do를 생성해주세요.</h3>
        </>
      ) : (
        <>
          <ProgressTodo />
          <CompletionTodo />
          <ExpirationTodo />
        </>
      )}

      <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={onTodoCloseModal} /> : null}
      </Potal>
    </>
  );
};

export default DetailTodoItem;
