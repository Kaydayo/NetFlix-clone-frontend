import React from 'react'

import './Step1.css'

const Step1 = ({count, handleCount}:{count:number, handleCount: ()=>void}) => {
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
        <button className='next-btn' onClick={handleCount}>Next</button>
      </div>
      
   </div>
  )
}

export default Step1