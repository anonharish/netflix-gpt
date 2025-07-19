// const url = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';

import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";

import { updateYoutubePlaykey } from "../../store/movieSlice";
export const useGetVideo = (movie_id) => {
  const dispatch = useDispatch();
  const getNowPlayingMovieList = async () => {
    const resp = await axios.get(
      API_BASE_URL + "movie/" + movie_id + "/videos?language=en-US",
      API_OPTIONS
    );
    const _youtubeKey =
      resp.data.results.find((item) => item.type == "Trailer").key ||
      resp.data.results[0].key;

    dispatch(updateYoutubePlaykey(_youtubeKey));
  };
  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
};
