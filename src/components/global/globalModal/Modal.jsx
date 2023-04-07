import { ModalBackground, ModalBox } from './modal.styled';
import React from 'react';

const Modal = children => {
  console.log(children);
  return (
    <>
      <ModalBackground />
      <ModalBox></ModalBox>
    </>
  );
};

export default Modal;
