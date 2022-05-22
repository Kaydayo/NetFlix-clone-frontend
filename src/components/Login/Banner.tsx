import React, {ChangeEvent, useState, useRef} from 'react';
import {useNavigate} from 'react-router';
import { Error } from '../../interfaces/movieInterface';
import {validEmail} from '../../utils/helper';
import { Rings } from 'react-loader-spinner';


const Banner = () => {
  const [email, setEmail] = useState<string>('');
  const [showError, setShowError] = useState<Error>({error: false, message: '', next: false});
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const errorRef = useRef<HTMLParagraphElement>(null)

  let navigate = useNavigate()

  console.log(email, showError)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    let check = validEmail(e.currentTarget.value)
     setShowError(check)
  }


  const handleStepRegister = () => {
    let check = validEmail(email)
     setShowError(check)
   
    if (showError.error) {
      
      errorRef.current!.style.display = 'block'
      setTimeout(() => (errorRef.current!.style.display = 'none'), 3000)
      
    }
    if (showError.next) {
      setIsClicked(true)
      localStorage.setItem('email', email)
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
          <input type="email" name="value" value={email} onChange={handleChange} placeholder="Email Address"/>
          <button type="button" className='getstarted' onClick={handleStepRegister}>{isClicked ? <Rings color="#fff" height={30} width={30}/>:`Get Started >`}</button>
        </form>
      </div>
      {showError.error && <p ref={errorRef} className={'error-font'}>{showError.message}</p> }
      
</div>
  )
}

export default Banner