import styled from 'styled-components';
import start from '../../../assets/start.png';
import startHover from '../../../assets/startHover.png';
import end from '../../../assets/end.png';
import endHover from '../../../assets/endHover.png';

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 20;
`;

export const ModalBox = styled.div`
  position: fixed;
  /* height: 470px; */
  width: 71.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* box-shadow: var(--box-shadow); */
  z-index: 21;
  text-align: center;
  padding: 20px 30px;
  border: var(--main-border);
  padding: 1.3rem;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.3rem;
    img {
      position: absolute;
      top: 1.6rem;
      right: 3.4rem;
      cursor: pointer;
    }
  }
  .btnBox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 2.3rem;
    button {
      width: 8.7rem;
      height: 3.6rem;
      font-size: 1.7rem;
      font-weight: 500;
      border-radius: 7px;
    }
    .cancel {
      background-color: #f8f8f8;
      color: #4b4b4b;
      border: none;
      box-shadow: 0px 2px 4px rgba(124, 124, 124, 0.25);
    }
    .next {
      background-color: var(--main-color);
      color: #fff;
      /* border: 1px solid #ff8336; */
      border: none;
      box-shadow: 0px 2px 4px rgba(255, 131, 54, 0.7);
    }
  }
`;

export const OKRBox = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 7px;
  padding: 1.3rem 0;

  .object {
    margin-bottom: 2.6rem;
  }
  & .itemBox {
    width: 100%;
    height: 4rem;
    padding: 0.9rem 1.4rem;
    display: flex;
    align-items: center;
    /* background-color: pink; */
    input {
      width: 100%;
      height: 4rem;
      border: 1.5px solid rgba(232, 232, 232, 1);
      border-radius: 7px;
      :hover {
        border: 1.5px solid var(--main-color);
      }
      ::placeholder {
        color: var(--placeholder-color);
      }
      :focus {
        border: var(--input-hover);
        /* filter: var(--input-focus); */
      }
    }
    img {
      margin-right: 1.3rem;
    }
  }

  .kr {
    margin: 0.9rem 0;
    justify-content: space-between;
    /* background-color: pink; */
    .plus {
      margin-left: 0.8rem;
    }
  }

  .date {
    width: 100%;
    height: 4rem;
    padding: 0.9rem 1.4rem;
    display: flex;
    align-items: center;
    /* background-color: skyblue; */
    img {
      margin-right: 1.3rem;
    }
    .dateBox {
      width: 44rem;
      display: flex;
      justify-content: start;
      margin-right: 2.1rem;
      position: relative;
      .start-container {
        .start-input {
          width: 25rem;
          height: 4.5rem;
          border: none;
          outline: none;
          position: relative;
          z-index: 1;
          text-align: center;
          background: url(${start}) no-repeat center / 100%;
          :focus {
            outline: none;
          }
          :hover {
            background: url(${startHover}) no-repeat center / 100%;
          }
        }
        .ep-arrow {
          display: none;
        }
        .rmdp-wrapper {
          position: relative;
          top: -1rem;
        }
      }
      .end-container {
        .end-input {
          width: 23rem;
          height: 4.5rem;
          border: none;
          outline: none;
          position: absolute;
          top: 0px;
          right: 0px;
          text-align: center;
          /* background-color: pink; */
          /* z-index: 1; */
          background: url(${end}) no-repeat center / 100%;
          :hover {
            background: url(${endHover}) no-repeat center / 100%;
          }
        }
        .ep-arrow {
          display: none;
        }
        .rmdp-wrapper {
          position: absolute;
          top: 3.5rem;
        }
      }
    }
    .colorBox {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .color {
        width: 3.9rem;
        height: 3.7rem;
        border-radius: 10px;
        background-color: #9b9b9b;
        margin-right: 1.3rem;
      }
    }
  }
`;

export const ErrorPopUp = styled.div`
  padding: 0.7rem 1.7rem;
  background-color: #ffd6bd;
  border: 1px solid #ffd6bd;
  border-radius: 7px;
  position: absolute;
  top: 5.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 19;
  color: #ec5a00;
  font-size: 1.7rem;
  font-weight: 700;
`;

// export const TodoModalBox = styled.div`
//   position: fixed;
//   /* height: 470px; */
//   width: 71.5rem;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #fff;
//   border-radius: 15px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   /* box-shadow: var(--box-shadow); */
//   z-index: 21;
//   text-align: center;
//   padding: 20px 30px;
//   border: var(--main-border);
//   form {
//   }
// `;

export const NotHave = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 2rem;
  font-weight: 500;
  .btnFlex {
    ${props => props.theme.row_center}
    gap: 1rem;
    width: 17rem;
    height: 4.7rem;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    padding: 0 1rem;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  & :hover {
    border-color: var(--main-color);
  }
`;
