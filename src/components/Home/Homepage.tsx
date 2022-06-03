import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Row from './Row'
import requests from '../../utils/request'

import {motion} from 'framer-motion'

const Homepage = () => {
  return (
    <motion.div className="homepage" initial={{opacity:0}} animate={{opacity:1}} exit={ {opacity:0}}>
        <Header/>
        <Hero/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    
    </motion.div>
  )
}

export default Homepage