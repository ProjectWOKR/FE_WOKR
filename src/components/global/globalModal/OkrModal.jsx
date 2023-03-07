import React from 'react';
import { ModalBackground, ModalBox } from './modal.styled';

import DatePicker from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';
import InputIcon from 'react-multi-date-picker/components/input_icon';

const OkrModal = ({ onCloseModal }) => {
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
  return (
    <>
      <ModalBackground />
      <ModalBox>
        <form>
          <input type='text' placeholder='목표' />
          <div className='object'>
            <input type='text' placeholder='핵심결과' />
            <div className='plus'>+</div>
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
      </ModalBox>
    </>
  );
};

export default OkrModal;
