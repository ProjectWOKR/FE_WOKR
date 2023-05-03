import Arrow from '../../../assets/dropdownArrow.png';
import fillArrow from '../../../assets/filldropArrow.png';
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 100%;
  height: 6.7rem;
  box-sizing: border-box;
  position: relative;
  /* border: 1.5px solid #d9d9d9; */

  input {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    border: none;
    border-radius: 12px;
    text-align: start;
    box-sizing: border-box;
    border: var(--default-bolder);

    :hover {
      border: var(--input-hover);
    }
    :focus {
      border: var(--input-hover);
      filter: var(--input-focus);
    }
    font-weight: 500;
    font-size: 2.1rem;
  }
  ul {
    width: 64rem;
    text-align: center;
    border-radius: 12px;
    padding: 0;
    margin: 10px auto;
    filter: var(--input-focus);
    border: var(--input-hover);
    box-sizing: border-box;
    position: relative;
    z-index: 9;

    max-height: 300px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
      /* background-color: #e8e8e8; */
      border-radius: 0 12px 12px 0;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 0 12px 12px 0;
      background-color: rgba(228, 228, 228, 0.7);
    }
    li {
      background-color: #ffffff;
      width: 100%;
      height: 6rem;
      line-height: 6rem;
      font-size: 2.1rem;
      font-weight: 500;
      text-align: start;
      padding: 0 20px;
      border-bottom: 1px solid #ccc;
      :nth-last-child(1) {
        // 금욜날
        /* border-radius: 0px 0px 12px 12px; */
      }
      :nth-child(1) {
        //금욜날
        /* border-radius: 12px 12px 0px 0px; */
      }
      :hover {
        background-color: #e8e8e8;
      }
    }
  }
`;

export const DropIcon = styled.div`
  width: 14px;
  height: 14px;
  background: url(${Arrow}) no-repeat center / contain;
`;

export const TodoDropIcon = styled.div`
  width: 14px;
  height: 14px;
  background: url(${Arrow}) no-repeat center / contain;
  position: absolute;
  right: 15px;
  top: 11px;
`;

export const TodoDropFillIcon = styled.div`
  width: 14px;
  height: 14px;
  background: url(${fillArrow}) no-repeat center / contain;
`;

export const DropFillIcon = styled.div`
  width: 14px;
  height: 14px;
  background: url(${fillArrow}) no-repeat center / contain;
`;

export const ColorSelect = styled.div`
  width: 9.5rem;
  height: 4rem;
  position: relative;
  .customInput {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: var(--default-bolder);
    font-size: 1.7rem;

    :hover {
      border: var(--input-hover);
    }
    :focus {
      border: var(--input-hover);
    }
    font-weight: 500;
    .valueFlex {
      padding: 0 16px 0 11px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .value {
        width: 53px;
      }
    }
  }
  img {
    width: 1.4rem;
    height: 1.4rem;
    right: 0;
  }
  ul {
    width: 5.4rem;
    text-align: center;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    margin: 10px auto;
    /* filter: var(--input-focus); */
    /* border: var(--input-hover); */
    box-sizing: border-box;
    position: relative;
    box-shadow: 0px 2px 5px rgba(150, 150, 150, 0.65);
    z-index: 9;
    background-color: #ffffff;
    li {
      width: 3.3rem;
      height: 3.1rem;
      font-size: 2.1rem;
      font-weight: 500;
      text-align: start;
      margin-bottom: 1rem;
      border-radius: 7px;
      transition: all 0.3s;
      :nth-last-child(1) {
        margin-bottom: 0rem;
      }
      :hover {
        transform: scale(1.16);
      }
    }
  }
`;

export const PrioritySelect = styled.div`
  width: 14rem;
  height: 4rem;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    text-align: start;
    box-sizing: border-box;
    border: var(--default-bolder);
    font-size: 1.7rem;
    text-align: center;

    :hover {
      border: var(--input-hover);
    }
    :focus {
      border: var(--input-hover);
    }
    font-weight: 500;
  }
  img {
    width: 1.4rem;
    height: 1.4rem;
    right: 0;
  }
  ul {
    width: 9.7rem;
    text-align: center;
    border-radius: 12px;
    padding: 1.5rem 0.5rem;
    margin: 10px 0 0 auto;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0px 2px 5px rgba(150, 150, 150, 0.65);
    z-index: 9;
    background-color: #ffffff;
    li {
      width: 100%;
      height: 3.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      border-radius: 6px;
      padding: 0 0.5rem;
      box-sizing: border-box;
      .img {
        width: 3.3rem;
        height: 100%;
        margin: 0;
      }
      .default {
        width: 3.3rem;
        height: 100%;
        margin: 0;
        background-color: #ffffff;
        border: 1px solid #f8f8f8;
        border-radius: 8px;
      }
      :hover {
        background-color: #f3f1f1;
      }
      :nth-last-child(1) {
        margin-bottom: 0rem;
      }
    }
  }
`;

export const OkrDropBox = styled.div`
  width: 100%;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    right: 0;
  }
  .todoDropicon {
  }
`;

export const OkrDropContainer = styled.div`
  width: 49rem;
  height: 28rem;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 110%;
  z-index: 2;
  overflow: auto;
  border-radius: 15px;
  box-shadow: 0px 2px 5px rgba(150, 150, 150, 0.65);
  padding-right: 0.7rem;
  h2 {
    height: 5.6rem;
    line-height: 5.6rem;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
  }
  .none {
    height: 3.6rem;
    width: 100%;
    border: 1px solid #f5f5f5;
    border-radius: 0px 7px 7px 0px;
    display: flex;
    align-items: center;
    padding: 0 0 0 7px;
    font-size: 1.5rem;
    border-left: none;
    margin-bottom: 6px;
    cursor: pointer;
    color: #bebebe;
    box-sizing: border-box;
    margin-bottom: 2.9rem;
    border-left: none;
    span {
      color: #9b9b9b;
      font-size: 0.8rem;
      font-weight: 700;
      margin-right: 0.7rem;
    }
    :hover {
      border: 1px solid #ff8336;
      background-color: #f5f5f5;
      border-left: none;
    }
  }
`;

export const KRTodoBox = styled.div`
  width: 610px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 13px;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  letter-spacing: -0.02em;
  background-color: white;
  color: #bebebe;
  border: 1.5px solid #e8e8e8;
  border-radius: 7px;
  cursor: pointer;

  .black {
  }
`;
export const KRTodoDefault = styled.div`
  color: ${({ valueState }) => `${valueState === false ? '#bdbdbd' : 'black'}`};
`;
export const OkrItem = styled.div`
  margin-bottom: 1.5rem;
  .title {
    width: 100%;
    border: 1px solid #f5f5f5;
    border-radius: 0px 7px 7px 0px;
    display: flex;
    align-items: center;
    padding: 0 0 0 7px;
    font-size: 1.5rem;
    border-left: none;
    margin-bottom: 6px;
    span {
      font-size: 3rem;
      font-weight: 700;
      margin-right: 0.7rem;
    }
  }
  .keyresult {
    margin: 3px 0 3px auto;
    width: 42rem;
    height: 3.6rem;
    border: 1px solid #f5f5f5;
    border-radius: 7px;
    /* text-align: left; */
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 1rem;
    font-size: 1.45rem;
    color: #000;
    cursor: pointer;
    :hover {
      border: 1px solid #ff8336;
      background-color: #f5f5f5;
    }
    span {
      font-size: 1.4rem;
      margin-right: 0.7rem;
    }
  }
`;

export const EmotionSelect = styled.div`
  width: 31px;
  height: 31px;
  position: relative;
  margin-left: 19px;
  cursor: pointer;
  /* background-color: pink; */
  .emotion {
    width: 100%;
    height: 100%;
    /* background-color: skyblue; */
  }
  ul {
    width: 15.7rem;
    position: fixed;
    z-index: 9;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(150, 150, 150, 0.65);
    border-radius: 12px;
    transition: all 0.3s;
    margin: 5px;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    cursor: default;
    .tooltip {
      font-size: 1.7rem;
      font-weight: 500;
      color: #4b4b4b;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      span {
        margin-right: 5px;
      }
      img {
        cursor: pointer;
      }

      /* text-align: center; */
    }
    li {
      width: 10.3rem;
      height: 3.1rem;
      margin: 0 auto;
      background-color: #f8f8f8;
      margin-bottom: 1rem;
      transition: all 0.3s;
      border-radius: 7px;
      cursor: pointer;
      :nth-last-child(1) {
        margin-bottom: 0rem;
      }
      :hover {
        transform: scale(1.16);
      }
    }
  }
`;
