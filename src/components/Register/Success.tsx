import React, {useState} from 'react'
import {IoCheckmarkDone} from 'react-icons/io5'
import {Rings} from 'react-loader-spinner'
import {useNavigate} from 'react-router'
import netflixImg from '../../Assets/netflixImg.png'
import {logout} from '../../firebase'
import './Success.css'

const Success = () => {
    const [isClick, setIsClicked] = useState<boolean>(false)
    const navigate = useNavigate()
  return (
      <div className="register-steps">
          <div className="loginHeader">
              <img src={netflixImg} alt="logo-nt" />
            <button className="signout" onClick={()=> logout()}>
                Sign Out
             </button>
          </div>
          <div className="success-main">
              <div className="pop">
                  <img src="https://img.icons8.com/external-konkapp-flat-konkapp/64/undefined/external-popcorn-cinema-konkapp-flat-konkapp-2.png" alt='success-img' />
                  <div className="chck-mak">
                      <IoCheckmarkDone/>
                  </div>
              </div>
              <h1>Successful!</h1>
              <p>Subscription was successful</p>
              <p>start streaming endlessly</p>
              
              <button className={`nxt-btn start-watch-btn ${isClick && "make-blind"}`} onClick={() => {
                  setIsClicked(true)
                  setTimeout(() => (navigate('/home')), 3000)
              }}
                  disabled={isClick}>Start Membership</button>
        {isClick && <div className="place-fore">
                  <Rings color="red" height={70} width={70} />
          </div>}
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
    </div>
  )
}

export default Success