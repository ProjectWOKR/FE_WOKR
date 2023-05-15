import { StNaviBar } from '../../../styles/header.styled';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navibar = () => {
  const navigate = useNavigate();
  // url 정보를 이용해 active 주기
  const location = useLocation();
  return (
    <StNaviBar>
      <div
        className={location.pathname === '/' ? 'active' : ''}
        onClick={e => {
          navigate('/');
        }}>
        Dashboard
      </div>
      <div
        className={location.pathname === '/todo' ? 'active' : ''}
        onClick={e => {
          navigate('/todo');
        }}>
        To - do
      </div>
    </StNaviBar>
  );
};

export default Navibar;
