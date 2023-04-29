import checkicon from '../assets/checkFull.png';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 68.2rem;
  height: 56rem;
  border: 1px solid rgba(232, 232, 232, 1);
  margin-left: 3.9rem;
  box-shadow: 0 3px 15px rgba(124, 124, 124, 0.25);
  border-radius: 12px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5.2rem;
  align-items: center;
  padding: 1.3rem 3rem;
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
  max-width: 68.2rem;
  width: 100%;
  max-height: 485px;
  height: 100%;
  overflow-y: auto;
  padding: 0 1.2rem;
  box-sizing: border-box;
`;

export const StTodoItem = styled.div`
  width: 100%;
  height: 11.8rem;
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
          margin-bottom: 10px;
        }
        .memo {
          font-size: 14px;
          color: #9b9b9b;
          margin-bottom: 8px;
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
  margin: 20px 0 8px 0;
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
          margin-bottom: 10px;
        }
        .memo {
          font-size: 14px;
          color: #9b9b9b;
          margin-bottom: 8px;
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
  margin: 20px 0 8px 0;
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
          margin-bottom: 10px;
        }
        .memo {
          font-size: 14px;
          color: #9b9b9b;
          margin-bottom: 8px;
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
  margin: 20px 0 8px 0;
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
    .completion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      /* background-color: #ccc; */
      position: relative;
      cursor: pointer;
      margin-right: 23px;
      /* img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      } */
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
        color: #9b9b9b;
        font-weight: 500;
        cursor: pointer;
        .todoName {
          font-size: 19px;
          margin-bottom: 10px;
          text-decoration: line-through;
        }
        .memo {
          font-size: 14px;
          margin-bottom: 8px;
          text-decoration: line-through;
        }

        p {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          text-decoration: line-through;
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
