import React from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
       <div className="loginContainer">
           <div className="set-fade1" />
       <div className="loginheader">
        <img src={netflixImg} alt="logo" />
        <button className="signup">
            Sign up
        </button>
        </div>

        <div className="banner">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <div className="form-sect">
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            </div>
        </div>
        <div className="set-fade2" />
       </div>

    </div>
  )
}

export default Login