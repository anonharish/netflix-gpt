import React from 'react'
import { POSTER_IMG_URL } from '../utils/constants'

const MovieCard = ({cardData}) => {
    console.log(cardData,"inside moviecard");
  return (
    <>
        <div>
            <img className = "w-48" src={`${POSTER_IMG_URL}${cardData.poster_path}`} alt="movie poster"/>
        </div>
    </>
    
  )
}

export default MovieCard