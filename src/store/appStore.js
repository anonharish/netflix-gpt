import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
});

const appStore = configureStore({ reducer: rootReducer });

export default appStore;
