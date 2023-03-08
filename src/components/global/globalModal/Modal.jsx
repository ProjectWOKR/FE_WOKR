import React from 'react';
import { ModalBackground, ModalBox } from './modal.styled';

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
