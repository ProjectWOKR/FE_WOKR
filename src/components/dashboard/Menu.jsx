import { MenuContainer, MenuItem } from '../../styles/menu.styled';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
