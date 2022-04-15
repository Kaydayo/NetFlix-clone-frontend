import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Row from './Row'
import requests from '../../utils/request'

const Homepage = () => {
  return (
    <div className="homepage">
        <Header/>
        <Hero/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    
    </div>
  )
}

export default Homepage