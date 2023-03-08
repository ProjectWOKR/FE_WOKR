import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 50px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;

export const CreateBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 45px;
  font-size: 35px;
  cursor: pointer;
`;

export const Header = styled.p`
  font-size: 50px;
  font-weight: 900;
`;

export const Container2 = styled.div`
  width: 700px;
  height: 400px;
  margin-top: 10px;
  background-color: #efeaea;
  padding: 10px 15px 10px 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;

export const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
