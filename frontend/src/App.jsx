import { useState } from 'react'
import { Button, ConfigProvider, Space } from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import LogInPage from './pages/LogInPage';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/Home' element={<HomePage/>}></Route>
          <Route path='/Login' element={<LogInPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
