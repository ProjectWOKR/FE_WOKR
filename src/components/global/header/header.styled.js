import styled from 'styled-components';
import logo from '../../../assets/logo.png';

export const Layout = styled.div`
  width: 100%;
  height: 9.7rem;
  ${props => props.theme.flex_row_between}
  padding: 0 5rem;
  /* position: sticky;
  top: 0; */
  /* margin-bottom: 97px; */
  div {
    display: flex;
    align-items: center;
    gap: 3.4rem;
  }
  img {
    cursor: pointer;
  }
`;

export const LogoImg = styled.div`
  width: 10.5rem;
  height: 4.5rem;
  cursor: pointer;
  background: url(${logo}) no-repeat center / 100%;
`;

export const Logout = styled.button`
  width: 8rem;
  height: 5rem;
`;
