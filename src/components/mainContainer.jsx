import React from "react";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingMovie = useSelector(
    (state) => state?.movie?.nowPlayingMovieList
  );
  if (!nowPlayingMovie) return null;

  const { id } = nowPlayingMovie[0];
  return (
    // This div now takes up space (due to aspect-video) and acts as a
    // positioning container for its children (due to relative).
    <div className="relative aspect-video">
      <VideoTitle movieMetaData={nowPlayingMovie[0]} />
      <VideoBackground videoid={id} />
    </div>
  );
};

export default MainContainer;