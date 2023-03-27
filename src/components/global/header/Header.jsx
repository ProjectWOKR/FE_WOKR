import React, { useState, useEffect } from 'react';
import { Layout, LogoImg } from './header.styled';
import logoutOFF from '../../../assets/logouton.png';
import logoutON from '../../../assets/logoutoff.png';
import { useNavigate } from 'react-router-dom';
import alarm from '../../../assets/alarm.png';
import user from '../../../assets/user.png';
import ReactGA from 'react-ga4';

export default function Header() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(false);
  const [logoutImg, setLogoutImg] = useState(logoutON);

  useEffect(() => {
    setUserState(localStorage.getItem('accesstoken'));
  }, [localStorage.getItem('accesstoken')]);

  const onLogout = () => {
    localStorage.removeItem('accesstoken');
    setUserState(userState + 1);
    navigate('/');
  };

  const handleMouseEnter = () => {
    setLogoutImg(logoutOFF);
  };

  const handleMouseLeave = () => {
    setLogoutImg(logoutON);
  };

  return (
    <Layout>
      <LogoImg
        onClick={() => {
          ReactGA.event({
            category: '버튼',
            action: '로그아웃',
          });
          navigate('/');
        }}
      />
      {userState !== null || undefined ? (
        <>
          <div>
            <img
              src={logoutImg}
              alt=''
              className='user'
              onClick={() => onLogout()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </>
      ) : null}
    </Layout>
  );
}
