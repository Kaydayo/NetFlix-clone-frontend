import React, { useEffect, useState } from 'react'
import { IRow, IMovie} from '../../interfaces/movieInterface'
import axios from '../../utils/axios'
import  './Row.css'

function Row({title, fetchUrl, isLargeRow = false}:IRow) {
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
    <img
    className = {`row_poster ${isLargeRow && "row_posterLarge"}`} 
    key = {movie.id}
    src={`${base_url}${
         isLargeRow ? movie.poster_path : movie.backdrop_path
       }`} alt={movie.name} />
     ))}
</div>
    
   </div>
  )
}

export default Row