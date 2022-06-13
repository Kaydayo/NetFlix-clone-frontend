import {useDispatch, useSelector} from 'react-redux';
import {registerWithEmailAndPassword} from '../../firebase';
import {addCount, addEmail, addEmailError, addPassword, addPasswordError} from '../store/features/userSlice';
import './Step2.css';

const Step2 = () => {

    const dispatch = useDispatch()
    const userEmail = useSelector((state: any) => state.user.email)
    const userPassword = useSelector((state: any) => state.user.password)
    const userEmailError = useSelector((state: any) => state.user.emailError)
  const userPasswordError = useSelector((state: any) => state.user.passwordError)
  const userCount = useSelector((state:any)=> state.user.count)
  console.log(userCount)
  const handleNext = () => {
    if (userPasswordError || userEmailError || userEmail === '' || userPassword === '') {
      return
    }
    registerWithEmailAndPassword(userEmail, userPassword)
    dispatch(addCount())
    
  }
  
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
                          dispatch(addEmailError())
                      }} />
                      <label htmlFor="email" className={userEmail && "Active1"} >Email</label>
                      <p style={{color:"red", fontSize:"0.8rem"}}>{ userEmailError}</p>
        </div>
        <div className="form-label2">
                      <input type="password" className={userPassword ? '' : "make-red"} value={userPassword} name="password" onChange={(e) => {
                          dispatch(addPassword(e.target.value))
                          dispatch(addPasswordError())
                      }} />
                      <label htmlFor="password" className={userPassword && "Active2"} >Enter a password</label>
                      <p style={{color:"red", fontSize:"0.8rem"}}>{ userPasswordError}</p>
                  </div>
                  <div className="no-email">
                    <input type="checkbox" name="not-email-me"  />
                      <label htmlFor="not-email-me">Please Mujeeb do not email me any special offers</label>
                      
                      </div>
                  
              </div>
        <button className='next-btn' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Step2