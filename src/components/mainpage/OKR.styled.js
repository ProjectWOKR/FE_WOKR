import styled from 'styled-components';

export const Container = styled.div`
  width: 75.8rem;
  height: 56rem;
  border: 1px solid rgba(232, 232, 232, 1);
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

export const OkrContainer = styled.div`
  margin: 0 auto;
  width: 73.4rem;
  height: 48.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
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
      background-color: #ff5757;
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
      background-color: #ff5757;
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
