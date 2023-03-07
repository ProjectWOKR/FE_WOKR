import React from 'react';
import { ModalBackground, ModalBox } from './modal.styled';

const Modal = children => {
  console.log(children);
  return (
    <>
      <ModalBackground />
      <ModalBox>
        {/* <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <div>
          <div className='date'></div>
          <select name='color'>
            <option value=''></option>
          </select>
        </div> */}
      </ModalBox>
    </>
  );
};

export default Modal;
