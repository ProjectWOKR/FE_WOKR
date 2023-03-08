import React, { useEffect } from 'react';
import { ModalBackground, TodoModalBox } from './modal.styled';

import DatePicker from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';

const TodoModal = ({
  onCloseTodoModal,
  todoModalRef,
  todoModalOutSideClick,
}) => {
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const format = 'YYYY-MM-DD';

  // 모달 스크롤 방지
  useEffect(() => {
    // 현재 위치에 고정시킴
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      // 모달이 false면 style을  지우고 원래 있던 위치로 돌려주기
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      //-숫자px 형식으로나와서 파싱 후 음수를 정수로 바꾸기 위해 *-1
      window.scrollTo(0, parseInt(scrollY, 10) * -1);
    };
  }, []);
  return (
    <div>
      <ModalBackground ref={todoModalRef} onClick={todoModalOutSideClick} />
      <TodoModalBox>
        <form>
          <div className='selectBox'>
            <select name='result'>
              <option value='default' hidden>
                목표 / 핵심결과
              </option>
              <option value='object'>찰스 몸짱 만들기</option>
              <option value='kr1'> 체지방 7% 감소</option>
              <option value='kr2'>근육략 7% 증가</option>
              <option value='none'>선택안함(none)</option>
            </select>
          </div>
          <input type='text' placeholder='할 일' />
          <input type='text' placeholder='메모' />
          <div className='date'>
            <DatePicker
              style={{ width: '150px', marginRight: '10px' }}
              // render={<InputIcon />}
              months={months}
              weekDays={weekDays}
              format={format}
              placeholder='기한 설정'
              animations={[
                opacity(),
                transition({
                  from: 40,
                  transition:
                    'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                }),
              ]}
            />
            <select name='first'>
              <option value='default' hidden>
                우선순위
              </option>
              <option value='one'>1</option>
              <option value='two'>2</option>
              <option value='three'>3</option>
              <option value='four'>4</option>
            </select>
          </div>
          <div className='btnBox'>
            <button onClick={onCloseTodoModal}>취소</button>
            <button className='submit'>저장</button>
          </div>
        </form>
      </TodoModalBox>
    </div>
  );
};

export default TodoModal;
