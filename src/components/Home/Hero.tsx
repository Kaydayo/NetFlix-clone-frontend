import React, {useEffect, useState} from 'react';
import './Hero.css';
import axios from '../../utils/axios';
import requests from '../../utils/request';
import {BsFillPlayFill} from 'react-icons/bs'
import {HiInformationCircle} from 'react-icons/hi'

const Hero = () => {
    const [movie, setMovie] = useState<any>([])
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            return request
        } 

        fetchData()
        
    }, [])

    console.log(movie)
    const truncate = (str: string, n:number) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }

  return (
    <header className="hero" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        WebkitMask:"radial-gradient(circle at right bottom, transparent, #fff 50%)",
          mask:"radial-gradient(circle at right bottom, transparent , #fff 50%)"

    }}>
        <div className="hero-contents">
        <div className="typewriter">
            <h1 className="hero_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            </div>
            <div className="hero_buttons ">
                <button className="hero_button"><span><BsFillPlayFill/></span>Play</button>
                <button className="hero_button">My List <span><HiInformationCircle/></span></button>
            </div>
           
            <h1 className="text_description">
                { truncate(movie?.overview,200)}
            </h1>
        
        </div>
        <div className="hero_fade" />
    </header>
  )
}

export default Hero