import GlobalLayout from '../components/global/GlobalLayout';
import Header from '../components/global/header/Header';
import Mainpage from '../pages/Mainpage';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <GlobalLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/mainpage' element={<Mainpage />} />
      </Routes>
    </GlobalLayout>
  );
}
