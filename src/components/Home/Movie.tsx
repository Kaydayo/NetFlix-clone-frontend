import React , {useState} from 'react'
import { MovieProp } from '../../interfaces/movieInterface'
import './Movie.css'


function Movie({isLargeRow, movie, base_url, handleTrailer}:MovieProp) {
  const [style, setStyle] = useState({display: 'none'});
  

  


  const truncate = (str: string, n:number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
}
  return (
    <div className="movie-container" >
        <div
      className = {`row_poster ${isLargeRow && "row_posterLarge"}`} 
      key = {movie.id}
      style={{
        backgroundImage :`url(${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "150px",
        height: `${isLargeRow? "280px":"280px"}`,
        objectFit:"contain",
        marginRight:"15px",
        objectPosition:"center"
      } }
      onMouseEnter={e => {
        setStyle({display: 'block'});
    }}
    onMouseLeave={e => {
        setStyle({display: 'none'})
    }}
        onClick={()=> handleTrailer(movie)}
      
         >
           <div className="hover-settings" style={style}>
             <div className="bth">
             <div className="title">
             {movie.original_title?movie.original_title:movie.name}
             
             </div>
             {movie.vote_count > 8 ? '⭐️⭐️⭐️⭐️★' : '⭐️⭐️★★★'}
             <div className="over">
               {truncate(movie.overview, 100)}
             </div>
             </div>
             
             
           </div>
           
      </div>
      
      
    </div>
  )
}

export default Movie