import React, { useEffect } from 'react';
import { ModalBackground, OkrModalBox } from './modal.styled';

import DatePicker from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';
import InputIcon from 'react-multi-date-picker/components/input_icon';

const OkrModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  // console.log(modalOutSideClick);
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

  const plusKr = () => {
    console.log('눌림');
    alert('추가됨');
  };

  return (
    <div>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <OkrModalBox>
        <form>
          <input type='text' placeholder='목표' />
          <div className='object'>
            <input type='text' placeholder='핵심결과' />
            <div className='plus' onClick={plusKr}>
              +
            </div>
          </div>
          {/* <input type='text' />
          <input type='text' /> */}
          <div className='date'>
            <DatePicker
              style={{ width: '300px', marginRight: '10px' }}
              // render={<InputIcon />}
              months={months}
              weekDays={weekDays}
              format={format}
              placeholder='시작 기간'
              animations={[
                opacity(),
                transition({
                  from: 40,
                  transition:
                    'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                }),
              ]}
            />
            <p>~</p>
            <DatePicker
              style={{
                width: '300px',
                marginLeft: '10px',
                marginRight: '20px',
              }}
              months={months}
              weekDays={weekDays}
              format={format}
              placeholder='종료 기간'
              animations={[
                opacity(),
                transition({
                  from: 40,
                  transition:
                    'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                }),
              ]}
            />
            <select name='color'>
              <option value='none' hidden>
                색상
              </option>
              <option value='red'>빨강</option>
              <option value='blue'>파랑</option>
              <option value='yellow'>노랑</option>
              <option value='green'>초록</option>
            </select>
          </div>
          <div className='btnBox'>
            <button onClick={onCloseModal}>취소</button>
            <button className='submit'>저장</button>
          </div>
        </form>
      </OkrModalBox>
    </div>
  );
};

export default OkrModal;
