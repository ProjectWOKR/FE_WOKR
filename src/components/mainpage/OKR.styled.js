import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 50px;
  margin-top: 10px;
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
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;

export const OkrContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OkrItem = styled.div`
  width: 100%;
  height: 185px;
  box-sizing: border-box;
  .object {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100% / 4);
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    .title {
      width: 70px;
      height: 100%;
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      background-color: red;
    }
    .detail {
      width: calc(100% - 80px);
      height: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;

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
    }
    .percent {
      display: flex;
      align-items: center;
      input {
        margin-right: 30px;
      }
      p {
        margin-right: 50px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .kr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100% / 4);
    background-color: #fff;
    border: 1px solid #000;
    border-top: none;
    box-sizing: border-box;
    .title {
      width: 70px;
      height: 100%;
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      background-color: red;
    }
    .detail {
      width: calc(100% - 80px);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      font-weight: bold;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .percent {
      display: flex;
      align-items: center;
      input {
        margin-right: 30px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
      }
      .expression {
        width: 40px;
        height: 40px;
        background-color: #ccc;
        margin-left: 10px;
      }
    }
  }
`;
