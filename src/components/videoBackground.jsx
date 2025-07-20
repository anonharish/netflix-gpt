import React from "react";
import { useGetVideo } from "../hooks/apiHookCalls/useGetVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoid }) => {
  const videoKey = useSelector((state) => state.movie?.youtubePlaykey);
  useGetVideo(videoid);
  if (!videoKey) return null;
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
