import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SeconderyContainer = () => {
  const movieSliceState = useSelector(
    (state) => state.movie
  );
  const {nowPlayingMovieList,popularMovieList} = movieSliceState;
  console.log(popularMovieList,"inside pop")
  // It's good practice to add a guard clause
  if (!nowPlayingMovieList) return null;
  

  return (
    <div className="">
      <div className="bg-black">
        <div className="-mt-36 relative z-20 ">
        <MovieList title={"Now Playing"} data={nowPlayingMovieList} />
      
        <MovieList title={"Trending"} data={nowPlayingMovieList} />
        {popularMovieList && <MovieList title={"Popular"} data={popularMovieList} />}
        </div>
      </div>
    </div>
  );
};

export default SeconderyContainer;