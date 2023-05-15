import logo from '../assets/logo.png';
import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7rem;
  position: relative;
  /* margin-bottom: 30px; */
  div {
    display: flex;
    align-items: center;
    gap: 3.4rem;
  }
  img {
    cursor: pointer;
  }
`;

export const Guide = styled.div`
  width: 130px;
  height: 45px;
  background-color: #fe8140;
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #fe6444;
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

export const StMenu = styled.div`
  margin: 0 0 0 auto;
`;

export const StNavi = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15rem;
`;

export const StNaviBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 50px;
  div {
    border-radius: 15px 15px 0 0;
    height: 100%;
    font-size: 1.8rem;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      color: #000;
      background-color: #f3efef;
      font-weight: bold;
    }
    &:hover {
      background-color: #f3efef;
    }
  }
`;
