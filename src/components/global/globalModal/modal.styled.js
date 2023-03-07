import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
`;

export const ModalBox = styled.div`
  position: fixed;
  height: 470px;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 21;
  text-align: center;
`;
