import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import Table from './components/Table';

function App() {
  return (
    <div className='container-fluid m-0'>
      <div className='home-page'>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/show' element={<Table/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
