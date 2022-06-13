import React from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import {logout} from '../../firebase'
import './Success.css'

const Success = () => {
  return (
      <div className="register-steps">
          <div className="loginHeader">
              <img src={netflixImg} alt="logo-nt" />
        <button className="signout" onClick={()=> logout()}>
            Sign Out
        </button>
          </div>
          <div className="step-by-step">
            
          </div>
          <footer className='steps-footer'>
        <p>Questions? Contact us.</p>
        <ul className='the-list'>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
        </ul>
      </footer>
    </div>
  )
}

export default Success