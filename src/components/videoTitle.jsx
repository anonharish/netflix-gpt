import React from "react";

const VideoTitle = ({ movieMetaData }) => {
  const { title, overview, vote_count } = movieMetaData;
  return (
    <>
      <div className="pt-[20%] px-12 bg-gradient-to-r from-black text-white absolute top-0 z-[1] w-full h-full">
        <p className="text-4xl font-bold w-2/5 mb-3 ">{title}</p>
        <p className="text-lg font-bold mb-3 ">No.of votes: {vote_count}</p>
        <p className="text-lg w-2/5 mb-4">{overview}</p>
        <div>
          <button className="border rounded-lg px-4 py-2 bg-slate-950 text-white mr-4 hover:bg-slate-700">
            ▶ Play
          </button>
          <button className="border rounded-lg px-4 py-2 bg-white text-slate-950 mr-4 hover:bg-slate-200">
            {" "}
            ℹ️ more info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
