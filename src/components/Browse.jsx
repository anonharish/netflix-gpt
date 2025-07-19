import React, { use } from "react";
import Header from "./Header";
import { useGetNowPlaying } from "../hooks/apiHookCalls/useGetNowPlaying";
import MainContainer from "./mainContainer";

const Browse = () => {
  useGetNowPlaying();
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Browse;
