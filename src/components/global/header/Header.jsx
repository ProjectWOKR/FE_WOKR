import React, { useState, useEffect } from 'react';
import { Layout, LogoImg, Logout } from './header.styled';

import { useNavigate } from 'react-router-dom';
import alarm from '../../../assets/alarm.png';
import user from '../../../assets/user.png';

export default function Header() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(false);

  useEffect(() => {
    setUserState(localStorage.getItem('accesstoken'));
  }, [userState]);

  const onLogout = () => {
    localStorage.removeItem('accesstoken');
    setUserState(userState + 1);
    navigate('/');
  };

  return (
    <Layout>
      <LogoImg
        onClick={() => {
          navigate('/');
        }}
      />
      {userState !== null ? (
        <>
          <div>
            <img src={alarm} alt='' />
            <img
              src={user}
              alt=''
              className='user'
              onClick={() => onLogout()}
            />
          </div>
        </>
      ) : null}
    </Layout>
  );
}
