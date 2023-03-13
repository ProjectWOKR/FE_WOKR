import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Toast = () => {
  // const contextClassName = {
  //   success : ,
  //   error : ,
  //   info : ,
  //   warning : ,
  // }
  return (
    <>
      {/* <button onClick={notify}>Notify !</button> */}
      <StToastContainer
        position='top-center'
        limit={1}
        closeButton={false}
        autoClose={1000}
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
  }
  .Toastify__toast {
    background-color: #ffd6bd;
  }
  .Toastify__toast-body {
    color: #ec5a00;
    font-size: 1.7rem;
  }
  .Toastify__progress-bar {
  }
`;
