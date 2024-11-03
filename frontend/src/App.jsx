import { useState } from 'react'
import { Button, ConfigProvider, Space, theme } from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import LogInPage from './pages/LogInPage';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import AccountSettings from './pages/AccountSettings';
import ProfilePage from './pages/ProfilePage';
import AboutUs from './pages/AboutUsPage';
import Contact from './pages/Contact';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <>
      <ConfigProvider
        theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/Login' element={<LogInPage/>}></Route>
              <Route path='/SignUp' element={<SignUpPage/>}></Route>
              <Route path='/Profile' element={<ProfilePage/>}></Route>
              <Route path='/Account_Settings' element={<AccountSettings/>}></Route>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Movie/:id' element={<MoviePage/>}/>
              <Route path='/Search' element={<SearchPage/>}/>
            </Routes>
          </BrowserRouter>
      </ConfigProvider>
     
    </>
  )
}

export default App
