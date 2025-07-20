import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SeconderyContainer = () => {
  const nowPlayingMovieList = useSelector(
    (state) => state.movie.nowPlayingMovieList
  );
  // It's good practice to add a guard clause
  if (!nowPlayingMovieList) return null;

  return (
    <div className="">
      <div className="mt-2 relative z-20 ">
        <MovieList title={"Now Playing"} data={nowPlayingMovieList} />
        {/* You can add your other MovieList components here */}
        {/* <MovieList title={"Trending"} data={trendingMovies} /> */}
        {/* <MovieList title={"Popular"} data={popularMovies} /> */}
      </div>
    </div>
  );
};

export default SeconderyContainer;