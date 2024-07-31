import axios from "axios";
import { saveMovies,saveTrendingMovies,saveMovieDetails,adderrors,changePage,saveSimilarMovies } from "../Reducers/movieReducer";

export const asyncGetMovies = (accordingToClick) => async (dispatch,getState) => {
    try {
        const {page} =  getState().movieReducer
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${accordingToClick}?api_key=11eafabab15fc91d50417227c788a542&page=${page}`)
        dispatch(saveMovies(data.results))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}

export const asyncGetTrendingMovies = () => async (dispatch,getState) => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=11eafabab15fc91d50417227c788a542`)
        dispatch(saveTrendingMovies(data.results))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}

export const asyncGetMoviesDetails = (movieId) => async (dispatch,getState) => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=11eafabab15fc91d50417227c788a542&append_to_response=videos`)
        dispatch(saveMovieDetails(data))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}




export const asyncSimilarMovies = (movieId) => async (dispatch,getState) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=11eafabab15fc91d50417227c788a542`);
        dispatch(saveSimilarMovies(data.results))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}