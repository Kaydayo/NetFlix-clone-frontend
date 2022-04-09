import React from 'react'
import './Hero.css'

const Hero = () => {

    const truncate = (str: string, n:number) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }

  return (
    <header className="hero" style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/3968358.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center"

    }}>
        <div className="hero-contents">
            <h1 className="hero_title">
                Movie Name
            </h1>
            <div className="hero_buttons ">
                <button className="hero_button">Play</button>
                <button className="hero_button">My List</button>
            </div>
            <h1 className="text_description">
                { truncate(`This is a test description of all we need to know,This is a test description of all we need to know
                This is a test description of all we need to knowThis is a test description of all we need to know
                This is a test description of all we need to know This is a test description of all we need to knowThis is a test description of all we need to know
                This is a test description of all we need to knowThis is a test description of all we need to know
                This is a test description of all we need to knowThis is a test description of all we need to know
                This is a test description of all we need to knowThis is a test description of all we need to know`,250)}
            </h1>
        </div>
        <div className="hero_fade" />
    </header>
  )
}

export default Hero