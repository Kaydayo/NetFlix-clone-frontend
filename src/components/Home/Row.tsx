import React, { useEffect, useState } from 'react'
import { IRow } from '../../interfaces/movieInterface'
import axios from '../../utils/axios'

function Row({title, fetchUrl, isLargeRow = false}:IRow) {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl) 
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])
  return (
   <div className="row">
     <h2>{title}</h2>
   </div>
  )
}

export default Row