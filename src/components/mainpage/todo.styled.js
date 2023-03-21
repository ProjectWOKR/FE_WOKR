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
`;

export const TodoContainer = styled.div`
  margin: 0 auto;
  /* width: 73.4rem; */
  max-width: 68.2rem;
  /* min-width: 45.2rem; */
  width: 100%;
  padding: 0 1.2rem;
  /* height: 48.3rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const StTodoItem = styled.div`
  width: 100%;
  height: 5.3rem;

  /* :nth-last-child(1) {
    border-bottom: 1px solid #000;
  } */
  .todo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 13px 0 20px;
    margin-bottom: 8px;
    background-color: #f8f8f8;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    :nth-last-child(1) {
      margin-bottom: 0;
    }
    .title {
      width: 43px;
      /* height: 19px; */
      /* background-color: skyblue; */
      text-align: center;
      color: #9b9b9b;
      font-size: 14px;
      font-weight: 700;
      margin-right: 31px;
    }
    .detail {
      /* width: calc(100% - 80px); */
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 3px 0 5px 0;
      /* background-color: pink; */
      /* background-color: #fff; */
      .name_date {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 15px;
        font-weight: bold;
        color: #4b4b4b;
        font-weight: 500;
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
        .check {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #ccc;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
`;
