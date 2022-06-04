import React from 'react'
import {IoCheckmarkCircleOutline} from 'react-icons/io5'
import {IoMdCheckmark} from 'react-icons/io'
import './Step3.css'
import {addCount} from '../store/features/userSlice'
import {useDispatch} from 'react-redux'

const Step3 = () => {
    const dispatch = useDispatch()
  return (
      <div className="step3">
          <div className="frst-3">
               <div className="ico">
              <IoCheckmarkCircleOutline />
              </div>
          <p>STEP <span className='mk-bld'>1</span> OF 3</p>
          <h2>Choose your plan.</h2>
         </div>
          <ul className='ul-step3'>
              <li><span className="ico-sm"><IoMdCheckmark/></span> <p>No commitments, cancel anytime</p></li>
              <li><span className="ico-sm"><IoMdCheckmark/></span><p>Everything on Netlix for one low price</p></li>
              <li><span className="ico-sm"><IoMdCheckmark/></span> <p>No ads and no extra fees. Ever</p></li>
          </ul>
          <button className='next-btn' onClick={()=>dispatch(addCount())}>Next</button>
          
    </div>
  )
}

export default Step3