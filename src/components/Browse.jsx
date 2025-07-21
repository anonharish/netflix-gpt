import React, { use } from "react";
import Header from "./Header";
import { useGetNowPlaying } from "../hooks/apiHookCalls/useGetNowPlaying";
import { useGetPopListMovies } from "../hooks/apiHookCalls/useGetPopListMovies";
import MainContainer from "./mainContainer";
import SeconderyContainer from "./seconderyContainer";
const Browse = () => {
  useGetNowPlaying();
  useGetPopListMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </>
  );
};

export default Browse;
