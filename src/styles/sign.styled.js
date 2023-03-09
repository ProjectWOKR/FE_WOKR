import styled from 'styled-components';

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;
  color: #2b2b2b;
  font-weight: 900;
  font-size: 42px;
  line-height: 57px;
  letter-spacing: 0.05em;
  cursor: default;
`;

export const ArticleHeader = styled.div`
  margin-left: 617px;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.05em;
  cursor: default;
  .div1 {
    margin-top: 67px;
    background-color: pink;
  }
  .div2 {
    margin-top: 28px;
  }
  .div3 {
    margin-top: 47px;
  }
  .p1 {
    font-size: 14px;
  }
  .p2 {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 550px;
    color: red;
  }
`;

export const InputBox = styled.div`
  margin-left: 617px;
  margin-top: 10px;
  width: 684px;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const EmailInput = styled.input`
  outline: none;
  font-weight: 500;
  font-size: 21px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1.5px solid #d9d9d9;
  :hover {
    border: var(--input-hover);
  }
  :focus {
    filter: var(--input-focus);
  }

  ::placeholder {
    font-weight: 500;
    font-size: 21px;
    line-height: 29px;
    color: #d2d2d2;
  }
`;

export const PwEye = styled.img`
  position: absolute;
  right: 25px;
  width: 36px;
  height: 27.5px;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  width: 684px;
  height: 67px;
  margin-left: 618px;
  margin-top: 63px;
  background-color: ${({ btnState }) =>
    `${btnState === false ? '#9f9f9f' : '#FF8336'}`};
  border-radius: 12px;
  font-weight: 700;
  font-size: 23px;
  line-height: 31px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const SignUpBtnMargin = styled.div`
  margin-bottom: 195px;
`;

export const HelpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-weight: 400;
  font-size: 21px;
  line-height: 29px;
  width: 100%;
  color: #7c7c7c;
  cursor: pointer;
  .p1 {
  }
  .p2 {
    margin-left: 55px;
  }
`;
export const DropBox = styled.div`
  margin-left: 617px;
  margin-top: 10px;
  width: 684px;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1.5px solid #d9d9d9;
  border-radius: 12px;
  /* background-color: pink; */
  :hover {
    border: var(--input-hover);
  }
  :focus {
    filter: var(--input-focus);
  }
`;
export const Dropdown = styled.select`
  font-weight: 500;
  font-size: 21px;
  line-height: 29px;
  margin-left: 22px;
  border: none;
  outline: none;
`;
