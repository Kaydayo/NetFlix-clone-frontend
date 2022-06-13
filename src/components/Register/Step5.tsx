import React from 'react'
import {MdOutlineLockOpen} from 'react-icons/md'
import {FaGreaterThan} from 'react-icons/fa'
import './Step5.css'

const Step5 = () => {
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
          <div className="lil-box">
              <div className="log-cards">
                  <p>Credit or Debit Card</p>
                  <div className="images">
                  <img alt="" className="logoIcon VISA" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg" />
                  <img alt="" className="logoIcon MASTERCARD" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" />
                      <img alt="" className="logoIcon VERVE" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_verve.png" />
                      </div>
              </div>
              <div className="gt-secure">
                   <div className="sec-server">
                      <p>Secure Server</p>
                      <MdOutlineLockOpen/>
                  </div>
                  <FaGreaterThan />
                 
              </div>
          </div>

    </div>
  )
}

export default Step5