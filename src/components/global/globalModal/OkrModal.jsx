import React from 'react';
import { ModalBackground, ModalBox } from './modal.styled';

const OkrModal = () => {
  return (
    <>
      <ModalBackground />
      <ModalBox>
        <form>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <div>
            <div className='date'></div>
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
        </form>
      </ModalBox>
    </>
  );
};

export default OkrModal;
