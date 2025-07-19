import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { updateNowPlayingMovieList } from "../../store/movieSlice";
export const useGetNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovieList = async () => {
    const resp = await axios.get(
      API_BASE_URL + "movie/now_playing?page=1",
      API_OPTIONS
    );
    dispatch(updateNowPlayingMovieList(resp.data?.results));
  };
  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
};
