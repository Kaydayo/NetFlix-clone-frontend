import React, { useEffect, useState }from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import avatar from '../../Assets/avatar.png'
import './Header.css'

const Header = () => {
    const [show, setShow] = useState(false)

    const handleNavEffect = () => {
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleNavEffect)
        return () => window.removeEventListener('scroll', handleNavEffect)
    })
return (
    <div className={`header ${show && "header_color"}`}>
        <div className="netflixLogo">
        <img src={netflixImg} alt="netflix logo" />
        </div>
        <div className="avatar">
            <img src={avatar} alt="avatar" />
        </div>
    </div>
)
}

export default Header