import { ModalBackground, ModalBox } from './modal.styled';
import React from 'react';

const Modal = children => {
  return (
    <>
      <ModalBackground />
      <ModalBox></ModalBox>
    </>
  );
};

export default Modal;
