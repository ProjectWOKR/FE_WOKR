import end from '../../../assets/end.png';
import endHover from '../../../assets/endHover.png';
import start from '../../../assets/start.png';
import startHover from '../../../assets/startHover.png';
import styled from 'styled-components';

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
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.2rem;
    h2 {
      font-size: 2rem;
      margin: 0;
      color: #4b4b4b;
    }
    img {
      position: absolute;
      top: 1.6rem;
      right: 3.4rem;
      cursor: pointer;
    }
  }
  .patchheader {
    margin-left: 23px;
    font-size: 20px;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;

    color: #4b4b4b;
  }
  .btnBox {
    display: flex;
    flex-direction: row;
    margin-top: 2.3rem;
    margin-bottom: 2.3rem;
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
      margin-left: 255px;
      box-shadow: 0px 2px 4px rgba(124, 124, 124, 0.25);
    }
    .next {
      background-color: var(--main-color);
      color: #fff;
      /* border: 1px solid #ff8336; */
      border: none;
      margin-left: 30px;
      box-shadow: 0px 2px 4px rgba(255, 131, 54, 0.7);
    }
    .deleteTodo {
      display: flex;
      margin-left: 123px;
      width: 106px;
      height: 36px;
      background: #f8f8f8;
      box-shadow: 0px 2px 4px rgba(124, 124, 124, 0.25);
      border: none;
      border-radius: 7px;
      cursor: pointer;
      /* position: absolute; */
      /* bottom: 23px; */
      right: 25px;
    }
  }
  .rangeInfo {
    font-size: 20px;
  }
  .alertHeader {
    font-size: 20px;
  }
  .alertbtn {
  }
  .deletebtn {
    display: flex;
    margin-left: 123px;
    width: 106px;
    height: 36px;
    background: #f8f8f8;
    box-shadow: 0px 2px 4px rgba(124, 124, 124, 0.25);
    border: none;
    border-radius: 7px;
    cursor: pointer;
  }
  .deleteImg {
    margin-left: 20px;
    margin-top: 8.5px;
    width: 18.4px;
    height: 20px;
  }
  .deleteName {
    margin-left: 15.6px;
    margin-top: 6px;
    font-weight: 500;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #4b4b4b;
  }
`;

export const OKRBox = styled.div`
  width: 100%;
  height: 16.6rem;
  background-color: #f8f8f8;
  border-radius: 7px;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: pink; */

  .object {
    margin-bottom: 2.7rem;
  }
  & .itemBox {
    width: 100%;
    height: 4rem;
    padding: 0.9rem 1.4rem;
    display: flex;
    align-items: center;
    position: relative;
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
  .ObjectTooltip {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 44.8rem; */
    height: 4rem;
    background-color: #4b4b4b;
    color: #fff;
    font-size: 1.7rem;
    border-radius: 7px;
    position: absolute;
    top: 4.8rem;
    left: 78px;
    padding: 0 13px;
    img {
      margin-right: 8px;
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
        .border {
          width: 21.8rem;
          height: 1px;
          border: 1px solid #f5f5f5;
          margin: 0 auto;
        }
        .timeBox {
          width: 21.8rem;
          margin: 0 auto;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 1.1rem 0;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
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
        .border {
          width: 21.8rem;
          height: 1px;
          border: 1px solid #f5f5f5;
          margin: 0 auto;
        }
        .timeBox {
          width: 21.8rem;
          margin: 0 auto;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 1.1rem 0;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .end-container-time {
        .end-input {
          width: 23rem;
          height: 4.5rem;
          border: none;
          outline: none;
          position: absolute;
          top: 0px;
          right: 0px;
          text-align: center;
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
          bottom: 3.5rem;
        }
        .border {
          width: 21.8rem;
          height: 1px;
          border: 1px solid #f5f5f5;
          margin: 0 auto;
        }
        .timeBox {
          width: 21.8rem;
          margin: 0 auto;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 1.1rem 0;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
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
        background-color: #fff;
        margin-right: 1.3rem;
        border: 1.5px solid rgb(232, 232, 232);
      }
    }
    .priorityBox {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
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

export const KRBox = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 7px;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .krTooltip {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 44.8rem; */
    height: 4rem;
    background-color: #4b4b4b;
    color: #fff;
    font-size: 1.7rem;
    border-radius: 7px;
    position: absolute;
    top: 4.8rem;
    left: 78px;
    padding: 0 13px;
    img {
      margin-right: 8px;
    }
  }
  .kr {
    display: flex;
    padding: 0 13px;
    img {
      margin-right: 1.3rem;
    }
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
  }
`;

export const NotHaveEl = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 2rem;
  font-weight: 500;
  /* background-color: pink; */
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

export const ToggleContainer = styled.div`
  position: relative;
  margin-top: 0.8rem;
  cursor: pointer;
  .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  .toggle--checked {
    background-color: #ff8336;
    transition: 0.5s;
  }
  .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
  }
  .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

export const TodoBox = styled.div`
  width: 100%;
  /* height: 16.6rem; */
  background-color: #f8f8f8;
  border-radius: 7px;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: pink; */

  .object {
    margin-bottom: 2.7rem;
  }
  & .itemBox {
    width: 100%;
    height: 4rem;
    padding: 0.9rem 1.4rem;
    display: flex;
    align-items: center;
    position: relative;
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
        .border {
          width: 21.8rem;
          height: 1px;
          border: 1px solid #f5f5f5;
          margin: 0 auto;
        }
        .timeBox {
          width: 21.8rem;
          margin: 0 auto;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 1.1rem 0;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
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
        .border {
          width: 21.8rem;
          height: 1px;
          border: 1px solid #f5f5f5;
          margin: 0 auto;
        }
        .timeBox {
          width: 21.8rem;
          margin: 0 auto;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 1.1rem 0;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .end-container-time {
        .end-input {
          width: 23rem;
          height: 4.5rem;
          border: none;
          outline: none;
          position: absolute;
          top: 0px;
          right: 0px;
          text-align: center;
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
          bottom: 3.5rem;
        }
        .border {
          width: 21.8rem;
          height: 1px;
          border: 1px solid #f5f5f5;
          margin: 0 auto;
        }
        .timeBox {
          width: 21.8rem;
          margin: 0 auto;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 1.1rem 0;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
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
        background-color: #fff;
        margin-right: 1.3rem;
        border: 1.5px solid rgb(232, 232, 232);
      }
    }
    .priorityBox {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }
`;
