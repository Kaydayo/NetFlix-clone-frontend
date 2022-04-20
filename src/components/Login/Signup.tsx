import React, {useState} from 'react';
import './Signup.css'
import { ISignup } from '../../interfaces/movieInterface';
import {AiFillCloseCircle} from 'react-icons/ai';
import { MyData } from '../../interfaces/movieInterface';

function Signup({handleSignIn}:ISignup) {
  const [isActive, setIsActive] = useState({email:false, password:false});
  const [value, setValue] = useState<MyData>({email:'', password:''})

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
        <input type="text" value={value.email} name="email" onChange={handleTextChange}/>
        <label htmlFor="email" className={ isActive.email ? "Active1" : ""}>enter email address</label>
        </div>
        <div className="form-label2">
        <input type="password" name="password" value={value.password} onChange={handleTextChange}/>
        <label htmlFor="password" className={ isActive.password ? "Active2" : ""}>enter password</label>
        </div>
        <button>
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
          <a href="/about" onClick={handleSignIn}>Sign up now.</a>
        </div>
    </div>
  )
}

export default Signup