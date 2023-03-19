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
  cursor: default;
`;

export const OkrContainer = styled.div`
  margin: 0 auto;
  width: 734px;
  height: 483px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const OKRBox = styled.div`
  width: 734px;
  height: 236px;
  margin-top: 11px;
  background: #f8f8f8;
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
`;

export const Slider = styled.input`
  width: 205px;
  height: 11px;
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
    color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
    cursor: default;
  }
  .NameBox {
    display: flex;
    flex-direction: column;
    .Cal {
      margin-left: 16px;
      width: 185px;
      height: 18px;
      font-style: normal;
      font-weight: 500;
      font-size: 12.5px;
      line-height: 17px;
      color: #4b4b4b;
    }
  }

  .Name {
    width: 300px;
    margin-top: 23px;
    margin-left: 16px;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;
    color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
    cursor: default;
  }
  .Range {
    width: 123px;
    height: 11px;
    margin-top: 34px;
    margin-left: 47px;
    cursor: pointer;
  }
  .percent {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.01em;
    margin-top: 26px;
    margin-left: 14px;
    color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
    cursor: default;
  }
  .patchbtn {
    margin-top: 26px;
    margin-left: 5px;
    width: 50px;
    height: 30px;
  }
`;

export const OKRSpace = styled.div`
  margin-top: 110px;
`;

export const KRBox = styled.div`
  width: 722px;
  height: 40px;
  background: #ffffff;
  border-radius: 7px;
  margin-top: 8px;
  margin-left: 6px;
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
    color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
    cursor: default;
  }
  .Name {
    margin-top: 6px;
    margin-left: 20px;
    width: 274px;
    height: 27px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #4b4b4b;
    cursor: default;
  }
  .Range {
    width: 123px;
    height: 11px;
    margin-top: 15px;
    margin-left: 73px;
    cursor: pointer;
  }
  .percent {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.01em;
    margin-top: 8px;
    margin-left: 14px;
    color: ${({ color }) => `${color === 'red' ? '#ff8336' : '#457eff'}`};
    cursor: default;
  }
  .emotionBox {
    margin-top: 5px;
    margin-left: 10px;
    width: 33px;
    height: 31px;
    background: #f8f8f8;
    border-radius: 7px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .emotion {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: -0.01em;
    color: #ff8336;
  }
  .patchbtn {
    margin-top: 7px;
    width: 50px;
    height: 30px;
  }
`;

export const EmptyKR = styled.button`
  width: 722px;
  height: 40px;
  background: #ffffff;
  color: #aaaaaa;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  border: none;
  border-radius: 7px;
  margin-top: 8px;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  .img {
    padding: 5px;
  }
`;
