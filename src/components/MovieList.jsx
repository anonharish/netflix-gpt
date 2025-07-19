import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  console.log(title, data, "inside sec2");
  return (
    <>
      <div>
        <p>{title}</p>
        <div className="flex overflow-x-scroll">
          {data?.map((item) => (
            <MovieCard cardData={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
