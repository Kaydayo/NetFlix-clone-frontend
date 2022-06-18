import React, {useState} from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import {logout} from '../../firebase'
import './Success.css'
import {FcCancel} from 'react-icons/fc'
import {useNavigate} from 'react-router'
import {Rings} from 'react-loader-spinner'

const Cancel = () => {
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
                  <img src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/undefined/external-payment-supermarket-photo3ideastudio-flat-photo3ideastudio.png" alt='cancel-img'/>
                  <div className="chck-mak">
                      <FcCancel/>
                  </div>
              </div>
              <h1>Cancelled!</h1>
              <p>Don't give up movie ninja</p>
              <p>we desperately want you on our platform</p>
              
        <button className={`nxt-btn start-watch-btn ${isClick && "make-blind"}`} onClick={() => {
                  setIsClicked(true)
                  setTimeout(() => (navigate('/')), 3000)
              }}
          disabled={isClick}>Try Again</button>
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

export default Cancel