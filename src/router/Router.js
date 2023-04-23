import GlobalLayout from '../components/global/GlobalLayout';
import Header from '../components/global/header/Header';
import Menu from '../components/mainpage/Menu';
import Mainpage from '../pages/Mainpage';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import TodoPage from '../pages/TodoPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <GlobalLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </GlobalLayout>
  );
}
