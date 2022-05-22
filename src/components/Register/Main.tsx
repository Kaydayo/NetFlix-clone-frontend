import Step1 from './Step1'
import './StepReg.css'
import netflixImg from '../../Assets/netflixImg.png';
import {useState} from 'react';

function Main() {
  // const [count, setCount] = useState<number>(1)
    
    
  return (
      <div className="register-steps">
        <div className="loginheader">
        <img src={netflixImg} alt="logo-nt" />
        <button className="signout">
            Sign in
        </button>
      </div>
      <div className="step-by-step">
        {/* <p>STEP <span className="cnt-bold">{ count }</span> OF 3 </p> */}
        <Step1 />
      </div>
    </div>
  )
}

export default Main