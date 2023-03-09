import React from 'react';
import { Layout, LogoImg, Logout } from './header.styled';
import Logo from '../../../assets/WORK.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('accesstoken');
    navigate('/');
  };
  return (
    <Layout>
      <LogoImg
        src={Logo}
        onClick={() => {
          navigate('/');
        }}
      />
      <Logout onClick={() => onLogout()}>로그아웃</Logout>
    </Layout>
  );
}
