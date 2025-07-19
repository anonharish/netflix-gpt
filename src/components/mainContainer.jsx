import React from "react";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";
import { useSelector } from "react-redux";
import { useGetVideo } from "../hooks/apiHookCalls/useGetVideo";

const MainContainer = () => {
  const nowPlayingMovie = useSelector(
    (state) => state?.movie?.nowPlayingMovieList
  );
  if (!nowPlayingMovie) return null;

  const { id } = nowPlayingMovie[0];
  return (
    <>
      <VideoTitle movieMetaData={nowPlayingMovie[0]} />
      <VideoBackground videoid={id} />
    </>
  );
};

export default MainContainer;
