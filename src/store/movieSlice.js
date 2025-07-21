import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: null,
    youtubePlaykey: null,
    popularMovieList:null,
  },
  reducers: {
    updateNowPlayingMovieList: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    updateYoutubePlaykey: (state, action) => {
      state.youtubePlaykey = action.payload;
    },
    updatePopularMovieList: (state, action) =>{
      state.popularMovieList = action.payload;
    }
  },
});

export const { updateNowPlayingMovieList, updateYoutubePlaykey, updatePopularMovieList } =
  movieSlice.actions;
export default movieSlice.reducer;
