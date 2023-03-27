import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Mainpage from '../pages/Mainpage';
import GlobalLayout from '../components/global/GlobalLayout';
import Header from '../components/global/header/Header';
// import RouteChangeTracker from './RouteChangeTracker';

export default function Router() {
  return (
    <GlobalLayout>
      <Header />
      {/* <RouteChangeTracker /> */}
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/mainpage' element={<Mainpage />} />
      </Routes>
    </GlobalLayout>
  );
}
