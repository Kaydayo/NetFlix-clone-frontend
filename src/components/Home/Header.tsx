import React, { useEffect, useState }from 'react'
import netflixImg from '../../Assets/netflixImg.png'
import avatar from '../../Assets/avatar.png'
import './Header.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoNotificationsSharp} from 'react-icons/io5'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, logout} from '../../firebase'
import {useNavigate} from 'react-router'

const Header = () => {
    const [show, setShow] = useState(false)
    const [pop, setPop] = useState(false)
    const [currEmail, setCurrEmail] = useState<string|null>("")
    const [user, loading] = useAuthState(auth)

    const navigate = useNavigate()

    const handleNavEffect = () => {
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
        if(loading)return
        if (!user) return navigate('/')
        setCurrEmail(user!.email)
        window.addEventListener('scroll', handleNavEffect)
        return () => window.removeEventListener('scroll', handleNavEffect)
    }, [user, loading])
return (
    <div className={`header ${show && "header_color"}`}>
        <div className="netflixLogo">
        <img src={netflixImg} alt="netflix logo" />
        <div className={`list-na ${show && 'red-style'}`}>
            <ul>
                <li>Home</li>
                <li>Tv shows</li>
                <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Modern</li>
            </ul>
        </div>
        </div>
        
        <div className="avatar">
            <AiOutlineSearch />
            <p style={{fontSize: '1rem'}}>Kids</p>
            <IoNotificationsSharp/>
            <img src={avatar} alt="avatar" onClick={()=> setPop(!pop)} />
        </div>
        {pop &&<div className="dropbox"> <div className="drop-container">
            <p>{currEmail}</p>
            <button onClick={logout}>Sign out</button>
        </div></div>}
    </div>
)
}

export default Header