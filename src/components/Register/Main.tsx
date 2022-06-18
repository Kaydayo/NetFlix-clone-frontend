import Step1 from './Step1'
import './StepReg.css'
import netflixImg from '../../Assets/netflixImg.png';
import {motion} from 'framer-motion'
import Step2 from './Step2';
import Step3 from './Step3';
import {useDispatch, useSelector} from 'react-redux';
import Step4 from './Step4';
import Step5 from './Step5';
import {auth, logout} from '../../firebase';
import {useNavigate} from 'react-router';
import {useAuthState} from 'react-firebase-hooks/auth';
import {changeSignUp} from '../store/features/userSlice';


function Main() {
  // const [count, setCount] = useState<number>(0)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

 
  const dispatch = useDispatch()
  const userCount = useSelector((state:any)=> state.user.count)
    
  // const handleCount = () => {
  //   if (count > 3) {
  //     setCount(0)
  //   } else {
  //     setCount(count + 1)
  //   }
    
  // }

  const myArray = [<Step1 />, <Step2 />, <Step3/>, <Step4/> , <Step5/>]
  return (
      <motion.div className="register-steps" initial={{opacity:0}} animate={{opacity:1}} exit={ {opacity:0}}>
        <div className="loginheader">
        <img src={netflixImg} alt="logo-nt" />
        <button className="signout" onClick={user ? () => {
          logout()
          navigate("/")
        } : () => {
          dispatch(changeSignUp(true))
          navigate("/")
        }}>
           {user? "Sign Out":"Sign in"}
        </button>
      </div>
      <div className="step-by-step">
        {/* <p>STEP <span className="cnt-bold">{ count }</span> OF 3 </p> */}

        {myArray[userCount]}
        {/* {myArray[3]} */}
        
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