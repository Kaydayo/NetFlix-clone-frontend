import React, { useEffect, useState } from 'react'
import { IRow, IMovie} from '../../interfaces/movieInterface'
import axios from '../../utils/axios'
import  './Row.css'
import Movie from './Movie'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title, fetchUrl, isLargeRow }:IRow) {
  const [movies, setMovies] = useState<Array<IMovie>>([])
  const[trailerUrl, setTrailerUrl] = useState<string|null>("")
 
  
  const base_url = "https://image.tmdb.org/t/p/original"

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl) 
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  const handleTrailer = (movie:any) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "").then((url:any) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      }).catch( () => console.log('Temporarily unavailable'))
    }
  }
  const opts = {
    height: "390px",
    width: "100%",
    playerVar: {
       autoplay: 1 
     }

}
  console.log(movies)
  return (
   <div className="row">
     <h2>{title}</h2>
<div className="row_posters">
{movies.map((movie:IMovie) => (
    (isLargeRow && movie.poster_path) || 
    (!isLargeRow && movie.backdrop_path ))&& (<>
  <Movie key={movie.id} isLargeRow={isLargeRow} movie={movie} base_url={base_url} handleTrailer={handleTrailer} />
  
  </>
    )
      
  )
     }
      </div>
      
      {trailerUrl && <YouTube videoId={trailerUrl} opts={ opts}/>}
   </div>
  )
}

export default Row