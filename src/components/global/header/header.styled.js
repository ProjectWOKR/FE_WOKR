import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 9.7rem;
  ${props => props.theme.flex_row_between}
  padding: 0 5rem;
  /* background-color: skyblue; */
  div {
    display: flex;
    align-items: center;
    gap: 3.4rem;
  }
  img {
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 10.5rem;
  height: 4.5rem;
  cursor: pointer;
`;

export const Logout = styled.button`
  width: 8rem;
  height: 5rem;
`;
