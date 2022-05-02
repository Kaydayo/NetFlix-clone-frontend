import React from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import './StepReg.css'

function Main() {
    
    
  return (
      <div className="register-steps">
          <div className="loginheader">
        <img src={netflixImg} alt="logo-nt" />
        <button className="signout">
            Sign in
        </button>
        </div>
    </div>
  )
}

export default Main