import React from 'react';
import { Layout, LogoImg, Logout } from './header.styled';

import { useNavigate } from 'react-router-dom';
import alarm from '../../../assets/alarm.png';
import user from '../../../assets/user.png';

export default function Header() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('accesstoken');
    navigate('/');
  };
  return (
    <Layout>
      <LogoImg
        onClick={() => {
          navigate('/');
        }}
      />
      {/* <Logout onClick={() => onLogout()}>로그아웃</Logout> */}
      <div>
        <img src={alarm} alt='' />
        <img src={user} alt='' className='user' onClick={() => onLogout()} />
      </div>
    </Layout>
  );
}
