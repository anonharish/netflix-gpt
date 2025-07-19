import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: null,
    youtubePlaykey: null,
  },
  reducers: {
    updateNowPlayingMovieList: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    updateYoutubePlaykey: (state, action) => {
      state.youtubePlaykey = action.payload;
    },
  },
});

export const { updateNowPlayingMovieList, updateYoutubePlaykey } =
  movieSlice.actions;
export default movieSlice.reducer;
