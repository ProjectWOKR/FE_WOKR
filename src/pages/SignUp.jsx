import Article from '../components/signUp/Article';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.accesstoken !== undefined) {
      navigate('/mainpage');
    }
  }, []);
  return <Article />;
}
