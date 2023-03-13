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
    color: #457eff;
  }
  .Name {
    width: 300px;
    margin-top: 23px;
    margin-left: 16px;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;
  }
  .Range {
    width: 205px;
    height: 11px;
    margin-top: 34px;
    margin-left: 47px;
  }
  .percent {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.01em;
    color: #ff8336;
    margin-top: 26px;
    margin-left: 14px;
  }
  &:nth-of-type(1) {
    .Logo {
      color: #ff8336;
    }
    .Name {
      color: #ff8336;
    }
    .Range {
    }
  }
  &:nth-of-type(2) {
    .Logo {
      color: #457eff;
    }
    .Name {
      color: #457eff;
    }
    .Range {
    }
  }
`;

// export const OkrItem = styled.div`
//   width: 100%;
//   height: 185px;
//   box-sizing: border-box;
//   .object {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     height: calc(100% / 4);
//     background-color: #ffffff;
//     border: 1px solid #000;
//     box-sizing: border-box;
//   }
// `;

// export const OKRBox = styled.div`
//   background-color: #f8f8f8;
//   .title {
//     width: 70px;
//     height: 100%;
//     text-align: center;
//     font-size: 54.2282px;
//     color: #ff8336;
//     font-weight: bold;
//   }
//   .detail {
//     width: calc(100% - 80px);
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     padding: 0 10px;
//     box-sizing: border-box;
//     .name_date {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       font-size: 15px;
//       font-weight: bold;
//       div {
//         font-size: 18px;
//       }
//     }
//     .percent {
//       display: flex;
//       align-items: center;
//       input {
//         margin-right: 30px;
//       }
//       p {
//         margin-right: 50px;
//         font-size: 18px;
//         font-weight: bold;
//       }
//     }
//   }
//   .kr {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     height: calc(100% / 4);
//     background-color: #fff;
//     border: 1px solid #000;
//     border-top: none;
//     box-sizing: border-box;
//     .title {
//       width: 70px;
//       height: 100%;
//       text-align: center;
//       font-size: 35px;
//       font-weight: bold;
//       background-color: #ff5757;
//     }
//     .detail {
//       width: calc(100% - 80px);
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       font-size: 18px;
//       font-weight: bold;
//       padding: 0 10px;
//       box-sizing: border-box;
//     }
//     .percent {
//       display: flex;
//       align-items: center;
//       input {
//         margin-right: 30px;
//       }
//       p {
//         font-size: 18px;
//         font-weight: bold;
//       }
//       .expression {
//         width: 40px;
//         height: 40px;
//         background-color: #ccc;
//         margin-left: 10px;
//       }
//   }
// `;
