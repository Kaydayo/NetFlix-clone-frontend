import React, { useState} from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import Banner from './Banner'
import './Login.css'
import Signup from './Signup'


const Login = () => {
    const [signUp, setshowSignUp] = useState<boolean>(false)

    const handleSignUp = () => {
        setshowSignUp(true)
    }

    const handleSignIn = () => {
        setshowSignUp(false)
    }

  return (
    <div className="login">
       <div className="loginContainer">
            

           <div className="set-fade1" />
       <div className="loginheader">
        <img src={netflixImg} alt="logo-nt" />
        <button className="signup" onClick={handleSignUp}>
            Sign In
        </button>
        </div>
       
        {signUp ? <Signup handleSignIn={handleSignIn} />:<Banner handleSignUp={handleSignUp}/>}
        <div className="set-fade2" />
       </div>

    </div>
  )
}

export default Login