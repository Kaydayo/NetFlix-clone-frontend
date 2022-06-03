import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addEmail, addError, addPassword} from '../store/features/userSlice';
import './Step2.css';

const Step2 = ({count, handleCount}: {count: number, handleCount: () => void}) => {

    const dispatch = useDispatch()
    const userEmail = useSelector((state: any) => state.user.email)
    const userPassword = useSelector((state: any) => state.user.password)
    const userError = useSelector((state:any)=> state.user.error)
  return (
      <div className="step2">
          <div className="under-step2">
      <p>STEP <span className='mk-bld'>1</span> OF 3</p>
        <h2>Create a password to start your membership</h2>
        <div className="paragraphs">
        <p>Just a few more steps and you're done!.</p>
                  <p>Mujeeb hates paperwork too.</p>
                   <div className="form-label1">
                      <input type="text" className={userEmail ? '' : "make-red"} value={userEmail} onChange={(e) => {
                          dispatch(addEmail(e.target.value))
                          dispatch(addError())
                      }} />
                      <label htmlFor="email" className={userEmail && "Active1" } >Email</label>
        </div>
        <div className="form-label2">
                      <input type="password" className={userPassword ? '' : "make-red"} name="password" onChange={(e) => {
                          dispatch(addPassword(e.target.value))
                          dispatch(addError())
                      }} />
                      <label htmlFor="password" className={ userPassword && "Active2"} >Enter a password</label>
                  </div>
                  <div className="no-email">
                    <input type="checkbox" name="not-email-me"  />
                      <label htmlFor="not-email-me">Please Mujeeb do not email me any special offers</label>
                      </div>
                  
              </div>
              <p style={{color:"red"}}>{ userError}</p>
        <button className='next-btn'>Next</button>
      </div>
    </div>
  )
}

export default Step2