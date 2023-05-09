import Header from '../components/global/header/Header';
import Mainpage from '../pages/Mainpage';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import TodoPage from '../pages/TodoPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </>
  );
}
