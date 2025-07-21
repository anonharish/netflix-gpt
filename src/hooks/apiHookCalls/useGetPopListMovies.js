import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { updatePopularMovieList } from "../../store/movieSlice";
export const useGetPopListMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovieList = async () => {
    const resp = await axios.get(
      API_BASE_URL + "movie/popular?page=1",
      API_OPTIONS
    );
    dispatch(updatePopularMovieList(resp.data?.results));
  };
  useEffect(() => {
    getPopularMovieList();
  }, []);
};
