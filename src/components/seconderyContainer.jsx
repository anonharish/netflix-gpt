import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'


const SeconderyContainer = () => {
const nowPlayingMovieList = useSelector(state=> state.movie.nowPlayingMovieList)
console.log(nowPlayingMovieList,"inside secondery")
  return (
    <>
    <div className=''>
     <MovieList title={"Now Playing"} data={nowPlayingMovieList}/>
     </div>
    </>
   
  )
}

export default SeconderyContainer;