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
  }
  .div2 {
    margin-top: 28px;
  }
  .div3 {
    margin-top: 47px;
  }
`;

export const InputBox = styled.div`
  margin-left: 617px;
  margin-top: 10px;
  width: 684px;
  height: 67px;
  border: 1.5px solid #d9d9d9;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmailInput = styled.input`
  width: 500px;
  border: none;
  margin-left: 22px;
  outline: none;
  font-weight: 500;
  font-size: 21px;
  line-height: 29px;
  ::placeholder {
    font-weight: 500;
    font-size: 21px;
    line-height: 29px;
    color: #d2d2d2;
  }
`;

export const PwEye = styled.img`
  margin-right: 25px;
  width: 36px;
  height: 27.5px;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  width: 684px;
  height: 67px;
  margin-left: 618px;
  margin-top: 63px;
  background: #ff8336;
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

export const Dropdown = styled.select`
  border: none;
  font-weight: 500;
  font-size: 21px;
  line-height: 29px;
  margin-left: 22px;
`;
