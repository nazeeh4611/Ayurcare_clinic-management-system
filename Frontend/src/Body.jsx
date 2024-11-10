import React from 'react'
import Home from './USER/Pages/Home'
import Login from './USER/Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Packages from './USER/Pages/Package';

function Body() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body;
