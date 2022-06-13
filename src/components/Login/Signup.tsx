import React, {useState} from 'react';
import './Signup.css'
import { ISignup } from '../../interfaces/movieInterface';
import {AiFillCloseCircle} from 'react-icons/ai';
import { MyData } from '../../interfaces/movieInterface';
import {useDispatch, useSelector} from 'react-redux';
import {addEmail, addEmailError, addPassword, addPasswordError} from '../store/features/userSlice';
import {logInWithEmailAndPassword} from "../../firebase";




function Signup({handleSignIn}:ISignup) {
  const [isActive, setIsActive] = useState({email:false, password:false});
  const [value, setValue] = useState<MyData>({email: '', password: ''})
  
    const dispatch = useDispatch()
   const userEmail = useSelector((state: any) => state.user.email)
  const userPassword = useSelector((state: any) => state.user.password)
  const userEmailError = useSelector((state: any) => state.user.emailError)
  const userPasswordError = useSelector((state: any) => state.user.passwordError)
  

  const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const newvalue = e.currentTarget.value
    setValue({...value,[name]:newvalue})
    if(newvalue !== '' ){
    setIsActive({...isActive, [name]:true})
  }else{
    setIsActive({...isActive,[name]:false})
  }
 
    
  }

 
  
  console.log(value)
  return (
    <div className="signup-form">
         <div className="close-btn" onClick={handleSignIn}>
         <AiFillCloseCircle/>
         </div>
        <h1>Sign in</h1>
        <div className="form-label1">
        <input type="text" value={userEmail} name="email" onChange={(e) => {
          dispatch(addEmail(e.target.value))
          dispatch(addEmailError())
        }}/>
        <label htmlFor="email" className={ userEmail && "Active1"}>enter email address</label>
        </div>
        <div className="form-label2">
        <input type="password" name="password" value={userPassword} onChange={(e) => {
          dispatch(addPassword(e.target.value))
          dispatch(addPasswordError())
        }
        } />
        <label htmlFor="password" className={ userPassword && "Active2"}>enter password</label>
        </div>
      <button onClick={() => logInWithEmailAndPassword(userEmail, userPassword)}>
            Sign in
        </button>
        <div className="btn-btm">
            <div className="remember-side">
            <input type="checkbox" name="remember-me"  />
            <label htmlFor="remember-me">Remember me</label>
            </div>
            <div>
                <p>Need help?</p>
            </div>
        </div>
        <div className="signup-hid">
        New to Netfix? 
          <a href="/" onClick={handleSignIn}>Sign up now.</a>
      </div>
      <p style={{color:'white'}}>{userEmailError}</p>
      <p style={{color:'white'}}>{ userPasswordError}</p>
    </div>
  )
}

export default Signup