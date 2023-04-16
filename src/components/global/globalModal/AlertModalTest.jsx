import { ModalBackground, ModalBox } from './modal.styled';
import React from 'react';
import { ImWarning } from 'react-icons/im';
import styled from 'styled-components';

const AlertModalTest = ({ onCloseModal, children }) => {
  console.log(children);
  return (
    <>
      <ModalBg />
      <ModalContent>
        <ImWarning onClick={onCloseModal} />
        <div className='contents'>{children}</div>
      </ModalContent>
    </>
  );
};

export default AlertModalTest;

const ModalBg = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 20;
`;

const ModalContent = styled.div`
  position: fixed;
  width: 71.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 21;
  text-align: center;
  padding: 20px 30px;
  border: var(--main-border);
  padding: 1.3rem;
  .contents {
    color: #ec5a00;
    font-size: 1.7rem;
  }
`;
