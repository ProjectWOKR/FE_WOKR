import styled from 'styled-components';

export const SignWrap = styled.div`
  width: 70rem;
  margin: 0 auto;
  /* background-color: yellowgreen; */
`;

export const MainHeader = styled.div`
  height: 5.7rem;
  ${props => props.theme.row_center}
  color: var(--text-color);
  font-weight: 900;
  font-size: 4.2rem;
`;

export const ArticleHeader = styled.div`
  height: 3.3rem;
  font-weight: 500;
  font-size: 2.4rem;
  margin: 5px 0;
  .p1 {
    font-size: 14px;
  }
  .p2 {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  height: 6.7rem;
  ${props => props.theme.row_center}
  position: relative;
`;

export const EmailInput = styled.input`
  outline: none;
  font-weight: 500;
  font-size: 2.1rem;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: var(--default-bolder);
  :hover {
    border: var(--input-hover);
  }
  :focus {
    border: var(--input-hover);
    filter: var(--input-focus);
  }

  ::placeholder {
    font-weight: 500;
    font-size: 2.1rem;
    color: var(--placeholder-color);
  }
`;

export const PwEye = styled.img`
  position: absolute;
  right: 2.5rem;
  width: 3.6rem;
  height: 2.7rem;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 3rem;
  height: 6.7rem;
  background-color: ${({ btnState }) =>
    `${btnState === false ? '#9f9f9f' : '#FF8336'}`};
  border-radius: 1.2rem;
  font-weight: 700;
  font-size: 2.3rem;
  color: var(--bg-color);
  border: none;
  cursor: pointer;
  margin-bottom: 10rem;
`;

export const SignUpBtnMargin = styled.div`
  /* margin-bottom: 195px; */
`;

export const HelpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
  font-weight: 400;
  font-size: 21px;
  line-height: 29px;
  width: 100%;
  color: #7c7c7c;
  cursor: pointer;
  .p1 {
  }
  .p2 {
  }
`;
export const DropBox = styled.div`
  width: 100%;
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
    border: var(--input-hover);
    filter: var(--input-focus);
  }
`;
