import React from 'react';
import Homepage from './Home/Homepage';
import Main from './Register/Main'; 
import Login from './Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Step1 from './Register/Step1';

const MainContent = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/stepRegister/main" element={<Main />} />
        <Route path="/stepRegister/1" element={<Step1/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default MainContent