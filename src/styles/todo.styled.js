import checkicon from '../assets/checkFull.png';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56rem;
  border: 1px solid rgba(232, 232, 232, 1);
  /* margin-left: 3.9rem; */
  box-shadow: 0 3px 15px rgba(124, 124, 124, 0.25);
  border-radius: 12px;
  background-color: #fff;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5.2rem;
  align-items: center;
  padding: 0 3rem;
  .btnBox {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    div {
      cursor: pointer;
    }
  }
`;

export const Header = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #4b4b4b;
  margin: 0;
  cursor: default;
`;

export const TodoContainer = styled.div`
  margin: 0 auto;
  max-height: 49rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 0 1.2rem;
  box-sizing: border-box;
`;

export const StTodoItem = styled.div`
  width: 100%;
  /* min-width: 330px; */
  /* height: 11.8rem; */
  /* background-color: pink; */
  .todo {
    /* max-width: 100%; */
    width: 100%;
    min-width: 46.1rem;
    height: 100%;
    display: flex;
    position: relative;
    padding: 14px 17px 21px 22px;
    margin-bottom: 8px;
    background-color: #f8f8f8;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    :nth-last-child(1) {
      margin-bottom: 0;
    }
    .completion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .notCompletion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #e8e8e8;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .check {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #ccc;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .title {
      width: 50px;
      text-align: center;
      color: #9b9b9b;
      font-size: 19px;
      font-weight: 700;
      margin-right: 25px;
      cursor: default;
      /* background-color: pink; */
    }
    .detail {
      width: 70%;
      height: 100%;
      box-sizing: border-box;
      padding: 3px 0 5px 0;
      .nameDate {
        width: 98%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: bold;
        color: #4b4b4b;
        font-weight: 500;
        cursor: pointer;

        .todoName {
          font-size: 1.8rem;
          margin-bottom: 7px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .memo {
          width: 95%;
          font-size: 14px;
          color: #9b9b9b;
          margin-bottom: 8px;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        p {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
      }

      .nameDateComplitc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 15px;
        font-weight: bold;
        color: #4b4b4b;
        font-weight: 500;
        cursor: default;
        div {
          font-size: 19px;
        }
        p {
          margin: 0;
          font-size: 12.5px;
        }
      }
      .priorityBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        .priority {
          width: 30px;
          height: 30px;
          background-color: #ccc;
          border-radius: 50%;
        }

        .completion {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #e8e8e8;
          background: url(${checkicon}) no-repeat center / 100%;
        }
      }
    }
    .priority {
      position: absolute;
      top: 20px;
      right: 18px;
      width: 17px;
      height: 23px;
    }
  }
`;

export const StExpirationTodo = styled.div`
  width: 100%;
  margin: 0px 0 8px 0;
  .label {
    color: #ff8336;
    font-size: 1.8rem;
    margin: 12px 0;
  }
  .todo {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    padding: 14px 17px 21px 22px;
    margin-bottom: 8px;
    background-color: #f8f8f8;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    :nth-last-child(1) {
      margin-bottom: 0;
    }
    .notCompletion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #e8e8e8;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .completion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #ccc;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .lock {
      width: 30px;
      height: 30px;
      position: relative;
      cursor: default;
      margin-right: 23px;
    }
    .title {
      width: 50px;
      text-align: center;
      color: #9b9b9b;
      font-size: 19px;
      font-weight: 700;
      margin-right: 25px;
      cursor: default;
    }
    .detail {
      height: 100%;
      box-sizing: border-box;
      padding: 3px 0 5px 0;
      .nameDate {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: bold;
        color: #4b4b4b;
        font-weight: 500;
        cursor: pointer;
        .todoName {
          font-size: 19px;
          margin-bottom: 7px;
        }
        .memo {
          font-size: 14px;
          color: #9b9b9b;
          margin-bottom: 8px;
        }

        /* p {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        } */
        .mine {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          /* text-decoration: line-through; */
          .warn {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
        .notMine {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          .warn {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
          /* span {
            text-decoration: line-through;
          } */
          .other {
            margin-left: 3px;
          }
          .createUser {
            margin-left: 7px;
            text-decoration: none;
          }
        }
      }
    }
    .priority {
      position: absolute;
      top: 20px;
      right: 18px;
      width: 17px;
      height: 23px;
    }
  }
`;

export const StProgressTodo = styled.div`
  width: 100%;
  margin: 0px 0 8px 0;
  .label {
    color: #ff8336;
    font-size: 1.8rem;
    margin: 12px 0;
  }
  .todo {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    padding: 14px 17px 21px 22px;
    margin-bottom: 8px;
    background-color: #f8f8f8;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    :nth-last-child(1) {
      margin-bottom: 0;
    }
    .notCompletion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #e8e8e8;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }

    .completion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      /* background-color: #ccc; */
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .lock {
      width: 30px;
      height: 30px;
      position: relative;
      cursor: default;
      margin-right: 23px;
    }
    .title {
      width: 50px;
      text-align: center;
      color: #9b9b9b;
      font-size: 19px;
      font-weight: 700;
      margin-right: 25px;
      cursor: default;
    }
    .detail {
      height: 100%;
      box-sizing: border-box;
      padding: 3px 0 5px 0;
      .nameDate {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: bold;
        color: #4b4b4b;
        font-weight: 500;
        cursor: pointer;
        .todoName {
          font-size: 19px;
          margin-bottom: 7px;
        }
        .memo {
          font-size: 14px;
          color: #9b9b9b;
          margin-bottom: 8px;
        }

        .mine {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          /* text-decoration: line-through; */
        }
        .notMine {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          span {
            /* text-decoration: line-through; */
          }
          img {
            margin-left: 3px;
          }
          .createUser {
            margin-left: 7px;
            text-decoration: none;
          }
        }
      }
    }
    .priority {
      position: absolute;
      top: 20px;
      right: 18px;
      width: 17px;
      height: 23px;
    }
  }
`;
export const StCompletionTodo = styled.div`
  width: 100%;
  margin: 0 0 8px 0;
  .label {
    color: #ff8336;
    font-size: 1.8rem;
    margin: 12px 0;
  }
  .todo {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    padding: 14px 17px 21px 22px;
    margin-bottom: 8px;
    background-color: #f8f8f8;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    :nth-last-child(1) {
      margin-bottom: 0;
    }
    .notCompletion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #e8e8e8;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .completion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      margin-right: 23px;
    }
    .lock {
      width: 30px;
      height: 30px;
      position: relative;
      cursor: default;
      margin-right: 23px;
    }
    .title {
      width: 50px;
      text-align: center;
      color: #9b9b9b;
      font-size: 19px;
      font-weight: 700;
      margin-right: 25px;
      cursor: default;
    }
    .detail {
      height: 100%;
      box-sizing: border-box;
      padding: 3px 0 5px 0;
      .nameDate {
        /* display: flex;
        flex-direction: column;
        justify-content: space-between; */
        font-weight: bold;
        color: #9b9b9b;
        font-weight: 500;
        cursor: pointer;
        .todoName {
          font-size: 19px;
          margin-bottom: 7px;
          text-decoration: line-through;
        }
        .memo {
          font-size: 14px;
          margin-bottom: 8px;
          text-decoration: line-through;
        }

        .mine {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          text-decoration: line-through;
        }
        .notMine {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          span {
            text-decoration: line-through;
          }
          img {
            margin-left: 3px;
          }
          .createUser {
            margin-left: 7px;
            text-decoration: none;
          }
        }
      }
    }
    .priority {
      position: absolute;
      top: 20px;
      right: 18px;
      width: 17px;
      height: 23px;
    }
  }
`;
