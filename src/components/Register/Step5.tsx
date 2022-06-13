import React, { useState } from 'react'
import {MdOutlineLockOpen} from 'react-icons/md'
import {GrNext} from 'react-icons/gr'
import {IoIosLock} from 'react-icons/io'
import './Step5.css'
import {Rings} from 'react-loader-spinner'
import {useDispatch} from 'react-redux'
import {addCount} from '../store/features/userSlice'

const Step5 = () => {
    const [payClick, setPayClick] = useState<boolean>(false)
    const dispatch = useDispatch()
    const handlePayClick = () => {
        setPayClick(true)
        setTimeout(() => dispatch(addCount()), 3000)
    }

  return (
      <div className="step5">
          <div className="lock">
              <MdOutlineLockOpen/>
          </div>
          <p>STEP <span className='mk-bld'>3</span> OF 3</p>
          <h2>Set up your payment</h2>
          <p className='set-p'>Your membership starts as soon as you set up payment.</p>
          <h4>No commitments.</h4>
          <h4>Cancel online anytime.</h4>
          <div className={`lil-box ${payClick && "make-blind"}`} onClick={handlePayClick}>
              <div className="log-cards">
                  <p>Credit or Debit Card</p>
                  <div className="log-images">
                  <img alt="" className="logoIcon VISA" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg" />
                  <img alt="" className="logoIcon MASTERCARD" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" />
                      <img alt="" className="logoIcon VERVE" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_verve.png" />
                      </div>
              </div>
              <div className="sec-server">
                  <p>Secure Server</p>
                  <span style={{color: 'orange'}}><IoIosLock/></span>
                      
                  </div>
              <div className="gt-secure">
                   
                  <GrNext />
                 
              </div>
          </div>
          {payClick && <div className="sep-ring">
                  <Rings color="red" height={70} width={70} />
          </div>}
      </div>
  )
}

export default Step5