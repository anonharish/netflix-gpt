import React from "react";
import { useGetVideo } from "../hooks/apiHookCalls/useGetVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoid }) => {
  const videoKey = useSelector((state) => state.movie?.youtubePlaykey);
  useGetVideo(videoid);
  if (!videoKey) return null;
  return (
    <div className="absolute top-0 w-full h-screen">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoKey}`}
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
