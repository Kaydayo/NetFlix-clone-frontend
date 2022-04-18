import React, { useEffect, useState } from 'react'
import { IRow, IMovie} from '../../interfaces/movieInterface'
import axios from '../../utils/axios'
import  './Row.css'
import Movie from './Movie'

function Row({title, fetchUrl, isLargeRow }:IRow) {
  const [movies, setMovies] = useState<Array<IMovie>>([])
  
  
  const base_url = "https://image.tmdb.org/t/p/original"

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl) 
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  console.log(movies)
  return (
   <div className="row">
     <h2>{title}</h2>
<div className="row_posters">
{movies.map((movie:IMovie) => (
    (isLargeRow && movie.poster_path) || 
    (!isLargeRow && movie.backdrop_path ))&& (
      <Movie key = {movie.id} isLargeRow={isLargeRow} movie={movie} base_url={base_url}/> 
    )
      
  )
     }
</div>
    
   </div>
  )
}

export default Row