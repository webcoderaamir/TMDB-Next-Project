import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Reducers/movieReducer";
import tvShowReducer from "./Reducers/tvShowReducer";


export const store = configureStore({
    reducer:{
        movieReducer,
        tvShowReducer
    }
})