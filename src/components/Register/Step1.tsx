import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addCount} from '../store/features/userSlice'
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../../firebase'
import './Step1.css'
import {useNavigate} from 'react-router';


const Step1 = () => {

  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  return (
    <div className="step1">
      <div className='tv-image'>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="" />
      </div>
      <div className="under-step1">
      <p>STEP <span className='mk-bld'>1</span> OF 3</p>
        <h2>Finish setting up your account</h2>
        <div className="paragraphs">
        <p>Netflix is personalized for you.</p>
          <p>Create a password to watch on any device at any time.</p>
        </div>
        <button className='next-btn' onClick={()=>dispatch(addCount())}>Next</button>
      </div>
      
   </div>
  )
}

export default Step1


