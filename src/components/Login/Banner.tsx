import React from 'react'
import { IBanner } from '../../interfaces/movieInterface'

const Banner = ({handleSignUp}:IBanner) => {
  return (
    <div className="banner">
    <h1>Unlimited movies, TV shows, and more.</h1>
    <h2>Watch anywhere. Cancel anytime.</h2>
    <div className="form-sect">
        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        <form className="signUpForm">
            <input type="email" name="value" placeholder="Email Address"/>
            <button type="button" className='getstarted' onClick={handleSignUp}>Get Started &gt;</button>
        </form>
    </div>
</div>
  )
}

export default Banner