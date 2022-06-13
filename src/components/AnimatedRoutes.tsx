 import React from 'react'
import {Route, Routes} from 'react-router'
import {useLocation} from 'react-router-dom'
import Homepage from './Home/Homepage'
import Login from './Login/Login'
import Main from './Register/Main'
import {AnimatePresence} from 'framer-motion'
import Success from './Register/Success'

 
const AnimatedRoutes = () => {
     const location = useLocation()
    return (
       <AnimatePresence>
     <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
          <Route path="/stepRegister/main" element={<Main />} />
          <Route path="/success" element={<Success/>}/>
            </Routes>
            </AnimatePresence> 
   )
 }
 
 export default AnimatedRoutes