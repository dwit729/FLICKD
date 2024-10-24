import { useState } from 'react'
import { Button, ConfigProvider, Space } from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import LogInPage from './pages/LogInPage';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import AccountSettings from './pages/AccountSettings';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/Home' element={<HomePage/>}></Route>
          <Route path='/Login' element={<LogInPage/>}></Route>
          <Route path='/SignUp' element={<SignUpPage/>}></Route>
          <Route path='/Profile' element={<ProfilePage/>}></Route>
          <Route path='/Account_Settings' element={<AccountSettings/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
