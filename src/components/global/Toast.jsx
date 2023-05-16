import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Toast = () => {
  return (
    <>
      <StToastContainer
        position='top-center'
        // position='bottom-left'
        // limit={1}
        closeButton={false}
        autoClose={800}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable={true}
        theme='colored'
      />
    </>
  );
};

export default Toast;

const StToastContainer = styled(ToastContainer)`
  .Toastify__toast-container {
    padding: 0;
  }
  .Toastify__toast {
    padding: 0;
    background-color: #ffd6bd;
    text-align: center;
  }
  .Toastify__toast-body {
    color: #ec5a00;
    font-size: 1.7rem;
    padding: 0;
  }
  .Toastify__progress-bar {
  }
`;
