import {useState} from 'react';
import {useNavigate} from 'react-router';
import { Rings } from 'react-loader-spinner';
import {useDispatch, useSelector} from 'react-redux';
import {addEmail, addError} from '../store/features/userSlice';


const Banner = () => {
  // const [email, setEmail] = useState<string>('');
  // const [showError, setShowError] = useState<Error>({error: false, message: '', next: false});
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  // const errorRef = useRef<HTMLParagraphElement>(null)

  
  const dispatch = useDispatch()

  const logEmail = useSelector((state: any) => state.user.email)
  const userError = useSelector((state:any)=> state.user.error)
 
  let navigate = useNavigate()


  // const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.currentTarget.value)
  //   let check = validEmail(e.currentTarget.value)
  //    setShowError(check)
  // }


  const handleStepRegister = () => {
    // let check = validEmail(email)
    //  setShowError(check)
    if (userError) {
      dispatch(addError())
    } else {
       setIsClicked(true)
      setTimeout(() => (navigate('/stepRegister/main')), 3000)
    }
  }


  
  
  return (
    <div className="banner">
    <h1>Unlimited movies, TV shows, and more.</h1>
    <h2>Watch anywhere. Cancel anytime.</h2>
    <div className="form-sect">
        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        
        <form className="signUpForm">
          <input type="email" name="value" value={logEmail} onChange={(e) => {
            dispatch(addEmail(e.currentTarget.value))
            dispatch(addError())
          }} placeholder="Email Address"/>
          <button type="button" className='getstarted' onClick={handleStepRegister}>{isClicked ? <Rings color="#fff" height={30} width={30}/>:`Get Started >`}</button>
        </form>
      </div>
      <p style={{color:"#ffffff", marginLeft:"-10px"}}>{userError}</p>
</div>
  )
}

export default Banner