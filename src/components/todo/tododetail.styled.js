import checkicon from '../../assets/checkFull.png';
import down from '../../assets/down.png';
import more from '../../assets/more.png';
import next from '../../assets/next.png';
import prev from '../../assets/prev.png';
import check from '../../assets/todoCheck.png';
import up from '../../assets/up.png';
import styled from 'styled-components';

export const StNavi = styled.div`
  position: sticky;
  top: 0;
  padding-bottom: 3px;
  box-sizing: content-box;
  background-color: #fff;
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
  /* border: 0.8px solid rgba(124, 124, 124, 0.25); */
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  margin-bottom: 70px;
  display: flex;
  .day {
    width: calc(100% / 7);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .label {
      color: #4b4b4b;
      font-size: 1.5rem;
      margin-bottom: 1px;
    }
    .date {
      font-size: 25px;
      /* background-color: pink; */
      line-height: 34px;
    }
  }
`;

export const DetailTodoWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 10px;

  /* background-color: pink; */
`;

export const StPastTodo = styled.div`
  padding-top: 50px;
  box-sizing: content-box;
  position: sticky;
  top: 186px;
  background-color: #fff;
  margin-bottom: 20px;
  /* border: 1px solid; */
  /* background-color: pink; */
`;

export const TodoDetailHeader = styled.div`
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    /* margin-bottom: 10.5px; */
    padding-bottom: 10.5px;
    box-sizing: content-box;
    cursor: default;
    .down {
      width: 13px;
      height: 7px;
      background: url(${down}) no-repeat center / 100%;
      margin-right: 10px;
      cursor: pointer;
    }
    .up {
      width: 13px;
      height: 7px;
      background: url(${up}) no-repeat center / 100%;
      margin-right: 10px;
      cursor: pointer;
    }
    .title {
      width: 100%;
      font-size: 2.3rem;
      color: #4b4b4b;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 0 19px 0 17px;
    margin-bottom: 10px;
    /* background-color: pink; */
  }
  .notHave {
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
  .dayLine {
    /* border-bottom: 2px solid #e8e8e8; */
  }
  .flexLeft {
    display: flex;
    align-items: center;
    cursor: pointer;
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
  margin-bottom: 20px;
`;

export const Finsh = styled.div`
  margin-bottom: 50px;
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
  height: 408px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  position: sticky;
  top: 0px;
  /* position: fixed;
  top: 0;
  right: 0; */
  padding: 24px 15px 15px 15px;
  box-sizing: border-box;
  background-color: #fff;
  /* box-shadow: 0px 3px 15px rgba(124, 124, 124, 0.25);
  border-radius: 8px; */

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
    }
    .have {
      width: 23px;
      height: 23px;
      border-radius: 2.3px;
      border: 1px solid #b57bff;
      background-color: #b57bff;
      background: url(${check}) no-repeat center/ 100%;
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
`;

export const NaviPlus = styled.div`
  margin-left: 2.8rem;
  cursor: pointer;
`;
