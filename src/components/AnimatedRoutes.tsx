 import React from 'react'
import {Route, Routes} from 'react-router'
import {useLocation} from 'react-router-dom'
import Homepage from './Home/Homepage'
import Login from './Login/Login'
import Main from './Register/Main'
import {AnimatePresence} from 'framer-motion'
import Success from './Register/Success'
import Cancel from './Register/Cancel'

 
const AnimatedRoutes = () => {
     const location = useLocation()
    return (
       <AnimatePresence>
     <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
          <Route path="/stepRegister/main" element={<Main />} />
          <Route path="/stepRegister/main/success" element={<Success />} />
          <Route path="/stepRegister/main/cancel" element={<Cancel/>}/>
            </Routes>
            </AnimatePresence> 
   )
 }
 
 export default AnimatedRoutes