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
  /* height: 470px; */
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 21;
  text-align: center;
  padding: 20px 30px;
  form {
    input {
      width: 100%;
    }
    .object {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 10px;
      input {
        width: 92%;
      }
      .plus {
        background-color: #a6a6a6;
        width: 40px;
        height: 40px;
        font-size: 25px;
        font-weight: bold;
        border-radius: 50%;
        color: #fff;
      }
    }
    .date {
      display: flex;
      align-items: center;
      font-size: 20px;
      height: 40px;
    }
    select {
      width: 100px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 0 10px;
      outline: none;
    }
    .btnBox {
      width: 400px;
      height: 35px;
      margin: 30px auto 15px auto;
      button {
        width: 60px;
        height: 100%;
        margin: 0 8px;
        border: 1px solid #ccc;
        font-weight: bold;
        background-color: #fff;
        border-radius: 8px;
      }
      .submit {
        background-color: #a6a6a6;
        color: #fff;
      }
    }
  }
`;