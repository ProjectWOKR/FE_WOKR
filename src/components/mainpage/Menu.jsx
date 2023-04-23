import { NowState } from '../../store/store';
import { MenuContainer, MenuItem } from './menu.styled';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const Menu = () => {
  const navigate = useNavigate();
  // url 정보를 이용해 active 주기
  const location = useLocation();

  return (
    <MenuContainer>
      <MenuItem
        className={location.pathname === '/' ? 'active' : ''}
        onClick={e => {
          navigate('/');
        }}>
        Dashboard
      </MenuItem>
      <MenuItem
        className={location.pathname === '/todo' ? 'active' : ''}
        onClick={e => {
          navigate('/todo');
        }}>
        To - do
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
