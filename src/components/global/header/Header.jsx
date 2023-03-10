import React from 'react';
import { Layout, LogoImg, Logout } from './header.styled';
import Logo from '../../../assets/WORK.png';
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
        src={Logo}
        onClick={() => {
          navigate('/');
        }}
      />
      {/* <Logout onClick={() => onLogout()}>๋ก๊ทธ์์</Logout> */}
      <div>
        <img src={alarm} alt='' />
        <img src={user} alt='' className='user' onClick={() => onLogout()} />
      </div>
    </Layout>
  );
}
