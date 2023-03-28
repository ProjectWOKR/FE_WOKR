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
  max-height: 485px;
  height: 100%;
  width: 100%;
  overflow: auto;
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
  .Logo {
    font-weight: 700;
    font-size: 54.2282px;
    line-height: 74px;
    margin-left: 17px;
    color: ${({ color }) => color};
    cursor: default;
  }
  .NameBox {
    width: 300px;
    .Name {
      margin-top: 16px;
      margin-left: 16px;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: -0.01em;
      color: ${({ color }) => color};
      cursor: pointer;
    }
    .Cal {
      height: 18px;
      font-style: normal;
      font-weight: 500;
      font-size: 12.5px;
      margin-left: 15px;
      color: #4b4b4b;
      cursor: default;
    }
  }
  .Range {
    width: 123px;
    height: 11px;
    margin-top: 34px;
    margin-left: 130px;
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
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  .Logo {
    margin-left: 20px;
    margin-top: 6px;
    width: 36px;
    height: 27px;
    font-weight: 500;
    font-size: 18px;
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
    margin-left: 13px;
    cursor: pointer;
  }
  .percent {
    width: 47px;
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
    cursor: pointer;
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
      color: ${({ color }) => color};
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
      /* margin-left: 10px; */
      margin-right: 5px;
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
  margin-bottom: 8px;
`;

export const OKRSpace = styled.div`
  margin-top: 110px;
  background-color: black;
`;

export const PersentBox = styled.div`
  height: 11px;
  border-radius: 3px;
  position: relative;
  //기존 디자인 없애기
  background-color: black;

  margin-top: ${({ state }) => `${state === 'Objective' ? '34px' : '15px'}`};
  margin-left: ${({ state }) =>
    `${state === 'Objective' ? '130px' : '12.5px'}`};
  cursor: pointer;
  input[type='range'] {
    width: 205px;
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    background: #e8e8e8;
    padding: 0;
    border-radius: 3px;
    border: 5px black;
  }
  // 포인터 역할
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #564b9a;
    cursor: pointer;

    margin-top: -10px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
  }
  //포인터가 움직이는 track
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    border-radius: 1.3px;
    border: 0.2px solid #f2f4f6;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
  }
  .bg {
    box-shadow: 0px 2px 4px ${({ ObColor }) => ObColor};
    border-radius: 3px;
    height: 11px;
    background-color: ${({ ObColor }) => ObColor};
    position: absolute;
    top: 0px;
  }
`;

export const PesentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
  margin-left: 13px;
`;

export const PatchPersentBox = styled.div`
  width: 245px;
  height: 11px;
  border-radius: 3px;
  position: relative;
  //기존 디자인 없애기

  display: flex;
  flex-direction: column;
  cursor: pointer;
  input[type='range'] {
    width: 205px;
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    background: #e8e8e8;
    padding: 0;
    border-radius: 3px;
    border: 5px black;
  }
  // 포인터 역할
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #564b9a;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: -4px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
  }
  //포인터가 움직이는 track
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    border-radius: 1.3px;
    border: 0.2px solid #f2f4f6;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
  }
  .bg {
    box-shadow: 0px 2px 4px ${({ ObColor }) => ObColor};
    border-radius: 3px;
    height: 11px;
    background-color: ${({ ObColor }) => ObColor};
    position: absolute;
    top: 0px;
  }
`;
