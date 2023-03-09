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
