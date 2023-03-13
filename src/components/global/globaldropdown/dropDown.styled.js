import styled from 'styled-components';
import { color } from './dropdown';

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
        border-radius: 0px 0px 12px 12px;
      }
      :nth-child(1) {
        border-radius: 12px 12px 0px 0px;
      }
      :hover {
        background-color: #e8e8e8;
      }
    }
  }
`;

export const DropIcon = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  position: absolute;
  top: 50%;
  right: 2.3rem;
  transform: translateY(-50%);
`;

export const ColorSelect = styled.div`
  width: 9.5rem;
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

    :hover {
      border: var(--input-hover);
    }
    :focus {
      border: var(--input-hover);
    }
    font-weight: 500;
    /* font-size: 2.1rem; */
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
      :hover {
        background-color: #f3f1f1;
      }
      :nth-last-child(1) {
        margin-bottom: 0rem;
      }
    }
  }
`;
