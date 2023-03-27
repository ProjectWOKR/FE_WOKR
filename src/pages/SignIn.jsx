import React, { useEffect } from 'react';
import Article from '../components/signIn/Article';
import Header from '../components/global/header/Header';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.accesstoken !== undefined) {
      navigate('/mainpage');
    }
  }, []);

  return <Article />;
}
