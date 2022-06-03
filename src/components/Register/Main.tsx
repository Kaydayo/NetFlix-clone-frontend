import Step1 from './Step1'
import './StepReg.css'
import netflixImg from '../../Assets/netflixImg.png';
import {useState} from 'react';
import {motion} from 'framer-motion'
import Step2 from './Step2';

function Main() {
  const [count, setCount] = useState<number>(0)
    
  const handleCount = () => {
    if (count > 2) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
    
  }

  const myArray = [<Step1 count={count} handleCount={ handleCount}/>, <Step2 count={count} handleCount={ handleCount}/> ]
  return (
      <motion.div className="register-steps" initial={{opacity:0}} animate={{opacity:1}} exit={ {opacity:0}}>
        <div className="loginheader">
        <img src={netflixImg} alt="logo-nt" />
        <button className="signout">
            Sign in
        </button>
      </div>
      <div className="step-by-step">
        {/* <p>STEP <span className="cnt-bold">{ count }</span> OF 3 </p> */}
      
        {myArray[count]}
        
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
    </motion.div>
  )
}

export default Main