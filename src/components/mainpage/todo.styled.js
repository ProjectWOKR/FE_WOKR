import styled from 'styled-components';

export const Container = styled.div`
  width: 75.8rem;
  height: 56rem;
  border: 1px solid rgba(232, 232, 232, 1);
  margin-left: 3.9rem;
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

// export const Container2 = styled.div`
//   width: 700px;
//   height: 400px;
//   margin-top: 10px;
//   background-color: #efeaea;
//   padding: 10px 15px 10px 15px;
//   box-sizing: border-box;
//   border: 1px solid #ccc;
// `;

export const TodoContainer = styled.div`
  margin: 0 auto;
  width: 73.4rem;
  height: 48.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StTodoItem = styled.div`
  width: 100%;
  height: calc(100% / 8);
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  box-sizing: border-box;
  :nth-last-child(1) {
    border-bottom: 1px solid #000;
  }
  .todo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .title {
      width: 100px;
      height: 100%;
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      background-color: #ff5757;
      /* line-height: 46.25px; */
    }
    .detail {
      width: calc(100% - 80px);
      height: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;
      background-color: #fff;
      .name_date {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 15px;
        font-weight: bold;
        div {
          font-size: 18px;
        }
      }
      .priorityBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
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
        }
      }
    }
  }
`;
