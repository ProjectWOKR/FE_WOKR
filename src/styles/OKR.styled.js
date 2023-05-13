import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56rem;
  border: 1px solid rgba(232, 232, 232, 1);
  box-shadow: 0 3px 15px rgba(124, 124, 124, 0.25);
  border-radius: 12px;
  box-sizing: border-box;
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

export const OkrContainer = styled.div`
  margin: 0 auto;
  max-height: 49rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const OKRBox = styled.div`
  width: 100%;
  height: 23.6rem;
  background: #f8f8f8;
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  margin-bottom: 11px;
  padding: 0 0.6rem;
  :nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export const Objective = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.1rem;
  position: relative;
  height: 8.5rem;

  /* background-color: pink; */
  .left {
    display: flex;
    align-items: center;
    .title {
      cursor: default;
      color: ${({ color }) => color};
      font-size: 5rem;
      font-weight: 700;
      margin-right: 16px;
    }
    .nameBox {
      max-width: 300px;
      min-width: 150px;
      /* min-width: 180px; */
      width: 100%;
      /* background-color: skyblue; */
      .name {
        width: 98%;
        height: 30px;
        font-weight: 500;
        font-size: 1.8rem;
        color: ${({ color }) => color};
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .date {
        width: 98%;
        height: 18px;
        font-style: normal;
        font-weight: 500;
        font-size: 12.5px;
        color: #4b4b4b;
        cursor: default;
      }
    }
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;
    /* margin-right: 5rem; */
    .percent {
      width: 35px;
      height: 25px;
      font-weight: 300;
      font-size: 18px;
      color: ${({ color }) => color};
      cursor: default;
      margin-left: 14px;
    }
  }
`;

export const KRBox = styled.div`
  width: 100%;
  height: 40px;
  background: #ffffff;
  border-radius: 7px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 11px;
  box-sizing: border-box;

  .left {
    width: 100%;
    display: flex;
    align-items: center;
    .logo {
      width: 40px;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      color: ${({ color }) => color};
      cursor: default;
      margin-right: 2rem;
    }
    .name {
      max-width: 300px;
      width: 100%;
      height: 27px;
      font-style: normal;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 27px;
      color: ${({ color }) => color};
      cursor: pointer;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;

    .percent {
      width: 35px;
      height: 25px;
      font-weight: 300;
      font-size: 18px;
      color: ${({ color }) => color};
      cursor: default;
      margin-left: 14px;
    }
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

export const PersentBox = styled.div`
  width: 123px;
  border-radius: 3px;
  position: relative;
  max-width: 180px;

  display: flex;
  background-color: pink;
  //기존 디자인 없애기
  cursor: pointer;
  input[type='range'] {
    width: 100%;
    height: 11px;
    -webkit-appearance: none;
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
