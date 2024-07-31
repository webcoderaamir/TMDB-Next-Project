import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Movies: [],
  TrendingMovies: [],
  MovieDetails: {},
  errors: [],
  similar:[],
  page: 1,
};

export const MovieReducer = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    saveMovies: (state, action) => {
      state.Movies = action.payload;
    },
    saveTrendingMovies: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    saveSimilarMovies: (state, action) => {
      state.similar = action.payload;
    },
    saveMovieDetails: (state, action) => {
      state.MovieDetails = action.payload;
    },
    adderrors: (state, action) => {
      state.errors.push(action.payload);
    },
    removeerrors: (state, action) => {
      state.errors = [];
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  saveMovies,
  saveTrendingMovies,
  saveMovieDetails,
  adderrors,
  removeerrors,
  RemoveMovies,
  changePage,
  saveSimilarMovies
} = MovieReducer.actions;

export default MovieReducer.reducer;
