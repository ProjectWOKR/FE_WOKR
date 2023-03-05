import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
  );
}
