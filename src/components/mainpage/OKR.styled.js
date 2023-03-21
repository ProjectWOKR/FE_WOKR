import styled from 'styled-components';

export const Container = styled.div`
  max-width: 75.8rem;
  width: 100%;
  height: 56rem;
  border: 1px solid rgba(232, 232, 232, 1);
  box-shadow: 0 3px 15px rgba(124, 124, 124, 0.25);
  border-radius: 12px;
  box-sizing: border-box;
  /* background-color: skyblue; */
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

export const OkrContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const OKRBox = styled.div`
  width: 100%;
  max-width: 75.8rem;
  height: 236px;
  background: #f8f8f8;
  padding: 0 6px;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  margin-bottom: 13px;
  :nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export const Objective = styled.div`
  display: flex;
  flex-direction: row;
  .Box {
    width: 44px;
    height: 74px;
    margin-left: 17px;
  }
  .Logo {
    font-weight: 700;
    font-size: 54.2282px;
    line-height: 74px;
    color: ${({ color }) => color};
    cursor: default;
  }
  .NameBox {
    width: 300px;
    display: flex;
    align-items: center;
    .box {
      width: 44px;
      .logo {
        font-weight: 700;
        font-size: 54.2282px;
        line-height: 74px;
        color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
        cursor: default;
      }
    }
    .nameBox {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      .name {
        /* width: 300px; */
        font-weight: 500;
        font-size: 24px;
        line-height: 33px;
        color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
        cursor: default;
      }
      .cal {
        height: 18px;
        font-style: normal;
        font-weight: 500;
        font-size: 12.5px;
        color: #4b4b4b;
      }
    }
  }
  .Name {
    width: 250px;
    margin-top: 23px;
    margin-left: 16px;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;
    color: ${({ color }) => color};
    cursor: pointer;
  }
  .Range {
    width: 123px;
    height: 11px;
    margin-top: 34px;
    margin-left: 145px;
    cursor: pointer;
  }
  .percent {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.01em;
    margin-top: 26px;
    margin-left: 14px;
    color: ${({ color }) => color};
    cursor: default;
  }
  .patchbtn {
    width: 50px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
  }
`;

export const KRBox = styled.div`
  width: 100%;
  height: 40px;
  background: #ffffff;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  .Logo {
    margin-left: 15px;
    margin-top: 6px;
    width: 36px;
    height: 27px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${({ color }) => color};
    cursor: default;
  }
  .Name {
    margin-top: 6px;
    margin-left: 20px;
    width: 400px;
    height: 27px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #4b4b4b;
    cursor: pointer;
  }
  .Range {
    width: 123px;
    height: 11px;
    margin-top: 15px;
    margin-left: 29px;
    cursor: pointer;
  }
  .percent {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.01em;
    margin-top: 8px;
    margin-left: 14px;
    color: ${({ color }) => color};
    cursor: default;
  }
  .right {
    display: flex;
    align-items: center;
    .range {
      width: 123px;
      height: 11px;
      cursor: pointer;
    }
    .percent {
      margin-left: 14px;
      font-weight: 300;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;
      color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
      cursor: default;
    }
    .emotionBox {
      width: 33px;
      height: 31px;
      background: #f8f8f8;
      border-radius: 7px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 10px;
    }
  }

  .patchbtn {
    position: absolute;
    top: 0;
    right: -50px;
    /* margin-top: 7px; */
    width: 50px;
    height: 30px;
    /* display: none; */
  }
`;

export const EmptyKR = styled.button`
  width: 100%;
  height: 40px;
  background: #ffffff;
  color: #aaaaaa;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  border: none;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  .img {
    padding: 5px;
  }
`;
