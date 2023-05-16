import logoutON from '../../../assets/logoutoff.png';
import logoutOFF from '../../../assets/logouton.png';
import {
  Guide,
  Layout,
  LogoImg,
  StMenu,
  StNavi,
} from '../../../styles/header.styled';
import Navibar from './Navibar';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [logoutImg, setLogoutImg] = useState(logoutON);

  useEffect(() => {
    setToken(localStorage.getItem('accesstoken'));
  }, [token]);

  const onLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  const handleMouseEnter = () => {
    setLogoutImg(logoutOFF);
  };

  const handleMouseLeave = () => {
    setLogoutImg(logoutON);
  };

  const gomain = () => {
    if (localStorage.getItem('accesstoken') === undefined) {
      alert('로그인 후 이용해주세요.');
    } else {
      navigate('/');
    }
  };

  const location = useLocation();
  return (
    <>
      <Layout>
        <LogoImg onClick={gomain} />
        <StMenu>
          <Guide
            onClick={() => {
              window.open(
                'https://wokrguide.notion.site/WOKR-efb64b5da5e842a3a10d7844023e60de'
              );
            }}>
            사용 가이드
          </Guide>

          {localStorage.getItem('accesstoken') ? (
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
        </StMenu>
      </Layout>
      {location.pathname === '/signin' ||
      location.pathname === '/signup' ? null : (
        <StNavi>
          <Navibar />
        </StNavi>
      )}
    </>
  );
}
