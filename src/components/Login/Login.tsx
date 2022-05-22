import React, { useState} from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import Banner from './Banner'
import './Login.css'

import Signup from './Signup'



const Login = () => {
    const [signUp, setshowSignUp] = useState<boolean>(false);

    

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
       
        {signUp ? <Signup handleSignIn={handleSignIn} />:<Banner />}
        {!signUp && <div className="footer">
            <p>Questions? Contact us.</p>
            <ul className="gird-foot">
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Account</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Ways to Watch</li>
                <li>Terms of use</li>
                <li>Privacy</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
                <li>Speed Test</li>
                <li>Netflix Mujeeb</li>
            </ul>
            <p></p>
            
            </div>}
        <div className="set-fade2" />
       </div>

    </div>
  )
}

export default Login