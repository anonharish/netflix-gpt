import React, { use } from "react";
import Header from "./Header";
import { useGetNowPlaying } from "../hooks/apiHookCalls/useGetNowPlaying";
import MainContainer from "./mainContainer";
import SeconderyContainer from "./seconderyContainer";
const Browse = () => {
  useGetNowPlaying();
  return (
    <>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </>
  );
};

export default Browse;
