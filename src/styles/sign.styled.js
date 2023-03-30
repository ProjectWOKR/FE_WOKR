import styled from 'styled-components';

export const SignWrap = styled.form`
  width: 70rem;
  margin: 0 auto;
  /* background-color: yellowgreen; */
  .valid {
    color: red;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    margin: 0.3rem 0 1rem 0;
  }
`;

export const MainHeader = styled.div`
  height: 5.7rem;
  ${props => props.theme.row_center}
  color: var(--text-color);
  font-weight: 900;
  font-size: 4.2rem;
`;

export const Label = styled.label`
  height: 3.3rem;
  display: block;
  font-weight: 500;
  font-size: 2.4rem;
  margin: 10px 0;
  cursor: pointer;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 6.7rem;
  ${props => props.theme.row_center}
  position: relative;
  /* background-color: pink; */
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
  margin-top: 10rem;
`;

export const HelpBox = styled.div`
  ${props => props.theme.row_center}
  gap: 50px;
  font-weight: 400;
  font-size: 2.1rem;
  height: 3rem;
  width: 100%;
  color: #7c7c7c;
  margin-top: 40px;
  span {
    cursor: pointer;
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
