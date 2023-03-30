import logoutON from '../../../assets/logoutoff.png';
import logoutOFF from '../../../assets/logouton.png';
import { Guide, Layout, LogoImg } from './header.styled';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';

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

  const logout = () => {
    if (process.env.NODE_ENV !== 'development') {
      ReactGA.event({
        category: '버튼',
        action: '로그아웃',
      });
    }
    navigate('/');
  };
  return (
    <Layout>
      <LogoImg
        onClick={() => {
          logout();
        }}
      />
      <div>
        <Guide
          onClick={() => {
            window.open(
              'https://wokrguide.notion.site/WOKR-efb64b5da5e842a3a10d7844023e60de'
            );
          }}>
          사용 가이드
        </Guide>
        {userState !== null || undefined ? (
          <>
            <img
              src={logoutImg}
              alt=''
              className='user'
              onClick={() => onLogout()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </>
        ) : null}
      </div>
    </Layout>
  );
}
