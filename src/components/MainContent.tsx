import React from 'react';
import Homepage from './Home/Homepage';
import Main from './Register/Main'; 
import Login from './Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const MainContent = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/stepRegister/*" element={<Main/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default MainContent