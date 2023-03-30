import Article from '../components/signIn/Article';
import React, { useEffect } from 'react';
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
