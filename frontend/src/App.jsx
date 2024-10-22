import { useState } from 'react'
import { Button, ConfigProvider, Space } from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
