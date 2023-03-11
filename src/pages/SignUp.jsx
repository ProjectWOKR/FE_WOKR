import React from 'react';
import Header from '../components/global/header/Header';
import Article from '../components/signUp/Article';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.accesstoken !== undefined) {
      navigate('/mainpage');
    }
  }, []);
  return <Article />;
}
