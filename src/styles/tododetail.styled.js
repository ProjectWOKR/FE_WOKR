import checkicon from '../assets/checkFull.png';
import down from '../assets/down.png';
import more from '../assets/more.png';
import next from '../assets/next.png';
import prev from '../assets/prev.png';
import check from '../assets/todoCheck.png';
import up from '../assets/up.png';
import styled from 'styled-components';

export const StNavi = styled.div`
  /* position: sticky; */
  /* top: 0; */
  padding-bottom: 3px;
  box-sizing: content-box;
  background-color: #fff;
  border-radius: 12px;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
`;
export const TodoHeader = styled.div`
  width: 100%;
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .dDay {
      font-size: 2.7rem;
      color: #4b4b4b;
      margin-right: 15px;
      cursor: default;
    }
    .down {
      width: 13px;
      height: 7px;
      background: url(${down}) no-repeat center / 100%;
      cursor: pointer;
    }
    .up {
      width: 13px;
      height: 7px;
      background: url(${up}) no-repeat center / 100%;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .prev {
      cursor: pointer;
      width: 14px;
      height: 33px;
      background: url(${prev}) no-repeat center / 100%;
    }
    .next {
      cursor: pointer;
      width: 14px;
      height: 33px;
      background: url(${next}) no-repeat center / 100%;
      margin-left: 45px;
    }
    .today {
      width: 70px;
      height: 35px;
      background-color: #f8f8f8;
      border-radius: 7.4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4b4b4b;
      font-size: 15px;
      margin-left: 35px;
      cursor: pointer;
    }
    .more {
      width: 25px;
      height: 5px;
      background: url(${more}) no-repeat center / 100%;
      margin-left: 35px;
    }
  }
`;

export const DateNavi = styled.div`
  width: 100%;
  height: 92px;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  /* background-color: pink; */
  .day {
    width: calc(100% / 7);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.4s;
    :hover {
      background-color: #e8e8e8;
    }
    .label {
      color: #4b4b4b;
      font-size: 1.5rem;
      margin-bottom: 1px;
    }
    .date {
      font-size: 25px;
      line-height: 34px;
    }
  }
  .include {
    width: calc(100% / 7);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.4s;
    :hover {
      background-color: #e8e8e8;
    }
    .label {
      color: #4b4b4b;
      font-size: 1.5rem;
      margin-bottom: 1px;
    }
    .date {
      font-size: 25px;
      line-height: 34px;
    }
    .includeCh {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #9b9b9b;
      position: absolute;
      bottom: 15px;
    }
  }
`;

export const DetailTodoWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  .noAny {
    /* color: #ff8336; */
    color: #000;
    font-weight: bold;
    font-size: 2rem;
  }
  h2 {
    font-size: 1.7rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  /* background-color: pink; */
`;

export const StPastTodo = styled.div`
  padding-top: 50px;
  box-sizing: content-box;
  position: sticky;
  top: 186px;
  background-color: #fff;
  margin-bottom: 20px;

  /* overflow-y: scroll; */
  /* border: 1px solid; */
  /* background-color: pink; */
`;

export const TodoDetailHeader = styled.div`
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 10.5px; */
    /* padding-bottom: 10.5px; */
    box-sizing: content-box;
    cursor: default;
    /* background-color: yellow; */
    margin-bottom: 17px;
    margin-top: 33px;
    .down {
      width: 13px;
      height: 7px;
      background: url(${down}) no-repeat center / 100%;
      margin-right: 10px;
      cursor: pointer;
      padding: 10px;
      box-sizing: border-box;
    }
    .up {
      width: 13px;
      height: 7px;
      background: url(${up}) no-repeat center / 100%;
      margin-right: 10px;
      cursor: pointer;
      padding: 10px;
      box-sizing: border-box;
    }
    .title {
      /* width: 50%; */
      /* background-color: pink; */
      font-size: 2.3rem;
    }
  }
`;

export const TodoDetailItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: default;
  /* background-color: pink; */
  /* box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7); */

  .item {
    width: 99%;
    margin: 0 auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 0 19px 2px 17px;
    cursor: default;
  }
  .notHave {
    width: 99% !important;
    margin: 0 auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    padding: 0 19px 0 17px;
    font-size: 1.6rem !important;
    font-weight: 500 !important;
    height: 45px;
    color: #9b9b9b !important;
  }
  .flexLeft {
    display: flex;
    align-items: center;
    /* cursor: pointer; */
    .kr {
      width: 50px;
      font-size: 2rem;
      margin-right: 15px;
    }
    .colorNull {
      width: 50px;
      font-size: 2rem;
      margin-right: 15px;
    }
    .krBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .krTitle {
        color: #4b4b4b;
        font-size: 1.9rem;
      }
      .fKrTitle {
        font-size: 1.9rem;
        text-decoration: line-through;
        color: #9b9b9b;
      }
      .krManager {
        display: flex;
        align-items: center;
        .date {
          color: #f24e1e;
          font-size: 1.4rem;
          margin-right: 5px;
        }
        .dateGreen {
          color: #34c93a;
          font-size: 1.4rem;
          margin-right: 5px;
        }
        .dateYellow {
          color: #ff9a43;
          font-size: 1.4rem;
          margin-right: 5px;
        }
        .kmName {
          font-size: 1.4rem;
          color: #7c7c7c;
          margin-bottom: 1px;
          margin: 0 5px;
        }
        .fDate {
          text-decoration: line-through;
          color: #9b9b9b;
          font-size: 1.4rem;
        }
        .normalDate {
          color: #9b9b9b;
          font-size: 1.4rem;
        }
      }
    }
  }
  .flexRight {
    display: flex;
    align-items: center;
    .check {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #e8e8e8;
      margin-left: 21px;
      cursor: pointer;
    }
    .checkbg {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #e8e8e8;
      margin-left: 21px;
      background: url(${checkicon}) no-repeat center / 100%;
      cursor: pointer;
    }
    .another {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #7c7c7c;
      margin-left: 21px;
    }
  }
`;

export const DDay = styled.div`
  /* padding: 0 10px; */
  /* box-sizing: border-box; */
`;

export const Finsh = styled.div`
  margin-bottom: 20px;
  .noCompl {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
    border-radius: 8px;
    padding: 0 19px 0 17px;
    margin-bottom: 10px;
    font-size: 2rem;
    height: 45px;
    color: #9b9b9b !important;
  }
`;

export const StTeam = styled.div`
  width: 312px;
  min-width: 312px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  position: sticky;
  top: 0px;
  /* background-color: pink; */

  .teamWrap {
    background-color: #fff;
    padding: 24px 15px 15px 15px;
    box-sizing: border-box;
    border-radius: 12px;
    .title {
      width: 100%;
      height: 45px;
      background-color: #f8f8f8;
      box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
      border-radius: 8px;
      margin-bottom: 10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #b57bff;
      img {
        width: 21px;
        height: 21px;
        position: absolute;
        top: 12px;
        left: 14px;
      }
    }
    .today {
      width: 100%;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8f8f8;
      box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
      border-radius: 8px;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    .table {
      width: 100%;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f8f8f8;
      box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
      border-radius: 8px;
      margin-bottom: 10px;
      font-size: 1.4rem;
    }
    .member {
      width: 100%;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f8f8f8;
      box-shadow: 0px 1px 4px rgba(210, 210, 210, 0.7);
      border-radius: 8px;
      margin-bottom: 10px;
      font-size: 2rem;
      color: #4b4b4b;
      padding: 0 16px 0 14px;
      /* .checkBox {
      width: 23px;
      height: 23px;
      border-radius: 2.3px;
      border: 1px solid #b57bff;
    } */
      .none {
        width: 23px;
        height: 23px;
        border-radius: 2.3px;
        border: 1px solid #b57bff;
        background-color: #fff;
        cursor: pointer;
      }
      .have {
        width: 23px;
        height: 23px;
        border-radius: 2.3px;
        border: 1px solid #b57bff;
        background-color: #b57bff;
        background: url(${check}) no-repeat center/ 100%;
        cursor: pointer;
      }

      .name {
        color: #4b4b4b;
        font-size: 1.9rem;
      }
      .number {
        color: #b57bff;
        font-size: 2rem;
      }
    }
  }
`;

export const NaviPlus = styled.div`
  margin-left: 2.8rem;
  cursor: pointer;
`;

export const StFilterContainer = styled.div`
  /* width: 50%; */
  height: 30px;
  display: flex;
  /* background-color: skyblue; */
`;

export const StKrFilter = styled.div`
  width: 180px;
  height: 30px;
  border: 0.5px solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .filterContainer {
    /* width: 100%; */
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #4b4b4b;
    padding: 0px 10px;
    cursor: pointer;
    img {
      width: 16px;
      height: 15px;
      margin-right: 6.6px;
    }
    .result {
      width: 140px;
      font-size: 1.3rem;
      .resultSide {
        display: inline-block;
        /* background-color: pink; */
        width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .krDrop {
    width: 206px;
    /* height: 127px; */
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    border: 0.5px solid #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 20;
    .inputBox {
      margin-top: 9px;
      width: 182px;
      white-space: normal;
      /* height: 21px; */
      background: #ffffff;
      border: 0.5px solid #000000;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 4px;
      .hashFlex {
        width: 152px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 4px;
        .hash {
          /* width: 36px; */
          height: 15px;
          /* background: #457eff; */
          /* border: 2px solid ${({ color }) => color}; */
          /* border: 1px solid #457eff; */
          border-radius: 2.3px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          /* background-color: pink; */
          span {
          }
          svg {
            width: 7px;
            height: 7px;
            margin-left: 3px;
            cursor: pointer;
            path {
              fill: rgba(217, 217, 217, 1);
            }
          }
        }
      }
      .closeBtn {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    ul {
      padding: 0;
      margin-top: 11px;
      margin-bottom: 0;
      li {
        width: 175px;
        /* height: 15px; */
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        /* flex-wrap: wrap; */
        font-size: 15px;
        font-weight: 500;
        /* :nth-last-child(1) {
          margin-bottom: 0;
        } */
        input {
          width: 15px;
          height: 15px;
          margin-right: 8px;
          cursor: pointer;
        }
        .kr {
          margin-right: 2px;
          width: 35px;
          height: 20px;
          /* background-color: skyblue; */
        }
        .none {
          width: 50px;
        }
        .desc {
          margin-left: 2px;
          /* width: calc(100% - 23px - 35px); */
          width: 65%;
          /* height: auto; */
          /* background-color: pink; */
        }
      }
    }
  }
`;

export const StDoneFilter = styled.div`
  /* width: 143px; */
  height: 30px;
  border: 0.5px solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 12px;
  .filterContainer {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #4b4b4b;
    cursor: pointer;
    padding: 0px 20px;
    /* background-color: pink; */

    img {
      width: 16px;
      height: 15px;
      margin-right: 6.6px;
    }
    span {
      font-size: 1.2rem;
      /* background-color: skyblue; */
    }
    .result {
    }
  }
  .doneDrop {
    /* width: 195px; */
    width: 155px;
    /* height: 127px; */
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    border: 0.5px solid #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 20;
    /* background-color: pink; */
    .inputBox {
      margin-top: 9px;
      /* width: 182px; */
      width: 130px;
      white-space: normal;
      /* height: 21px; */
      background: #ffffff;
      border: 0.5px solid #000000;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 4px;
      .hashFlex {
        width: 152px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 4px;
        .hash {
          /* width: 36px; */
          height: 15px;
          background: #457eff;
          border: 1px solid #457eff;
          border-radius: 2.3px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          span {
          }
          svg {
            width: 7px;
            height: 7px;
            margin-left: 3px;
            cursor: pointer;
            path {
              fill: rgba(217, 217, 217, 1);
            }
          }
        }
      }
      .closeBtn {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    ul {
      width: 100%;
      padding: 0;
      margin-top: 11px;
      margin-bottom: 0;
      margin-left: 35px;
      /* background-color: skyblue; */
      li {
        /* width: 175px; */
        width: 100%;
        height: 15px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 500;
        /* :nth-last-child(1) {
          margin-bottom: 0;
        } */
        input {
          width: 15px;
          height: 15px;
          margin-right: 8px;
          cursor: pointer;
        }
        .done {
          margin-right: 2px;
        }
      }
    }
  }
`;

export const StSortFilter = styled.div`
  width: 86px;
  height: 30px;
  border: 0.5px solid #000000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .sortContainer {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #4b4b4b;
    padding: 0px 10px;
    img {
      width: 14px;
      height: 14px;
      margin-right: 7px;
    }
    .result {
      font-size: 1.2rem;
    }
  }
  .sortDrop {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    width: 86px;
    background: #ffffff;
    border: 0.5px solid #000000;
    border-radius: 8px;
    text-align: center;
    z-index: 20;
    li {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #4b4b4b;
      border-bottom: 0.3px solid #000;
      transition: all 0.3s;
      position: relative;
      cursor: pointer;
      :first-child {
        border-radius: 8px 8px 0 0;
      }
      :nth-last-child(1) {
        border-radius: 0 0 8px 8px;
        border-bottom: none;
      }
      :hover {
        text-decoration: underline;
        background: rgba(217, 217, 217, 0.45);
      }
      .sortTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        width: 100%;
        height: 100%;
        /* img {
          position: absolute;
          width: 11px;
          height: 8px;
          top: 8px;
          left: 5px;
        } */
      }
      .sideDrop {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 100%;
        border: 0.5px solid #000;
        border-radius: 5px;
        background-color: #fff;
        p {
          width: 100%;
          height: 25px;
          margin: 0;
          border-bottom: 0.3px solid #000;
          box-sizing: border-box;
          font-size: 1.5rem;
          position: relative;
          transition: all 0.3s;
          color: #4b4b4b;
          /* background-color: pink; */
          :nth-last-child(1) {
            border: none;
          }
          :hover {
            /* background: rgba(217, 217, 217, 0.45); */
            background: rgba(217, 217, 217, 0.25);
          }
          img {
            position: absolute;
            width: 11px;
            height: 8px;
            top: 8px;
            left: 5px;
          }
        }
      }
    }
  }
`;
