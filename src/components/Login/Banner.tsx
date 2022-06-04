import {useState} from 'react';
import {useNavigate} from 'react-router';
import { Rings } from 'react-loader-spinner';
import {useDispatch, useSelector} from 'react-redux';
import {addEmail, addEmailError} from '../store/features/userSlice';


const Banner = () => {

  const [isClicked, setIsClicked] = useState<boolean>(false);
  

  
  const dispatch = useDispatch()

  const logEmail = useSelector((state: any) => state.user.email)
  const logEmailError = useSelector((state: any) => state.user.emailError)
  const getError = useSelector((state:any)=> state.user.error)
  
 
  let navigate = useNavigate()


  


  const handleStepRegister = () => {
   
    dispatch(addEmailError())
    if (logEmail === '' || logEmailError) {
      dispatch(addEmailError())
      return false
    } else{
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
            console.log(logEmailError)
            dispatch(addEmail(e.target.value))
            dispatch(addEmailError())
          }} placeholder="Email Address"/>
          <button type="button" className='getstarted' onClick={handleStepRegister}>{isClicked ? <Rings color="#fff" height={30} width={30}/>:`Get Started >`}</button>
        </form>
      </div>
      <p style={{color:"#ffffff", marginLeft:"-10px"}}>{logEmailError}</p>
</div>
  )
}

export default Banner