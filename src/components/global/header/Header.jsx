import React from 'react';
import { Layout, LogoImg } from './header.styled';
import Logo from '../../../sources/WORK.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Layout>
      <LogoImg
        src={Logo}
        onClick={() => {
          navigate('/');
        }}
      />
    </Layout>
  );
}
