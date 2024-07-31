import axios from "axios";
import { saveTvShows, saveTvShowsDetails,saveSimilarSeries } from "../Reducers/tvShowReducer";
import { adderrors } from "../Reducers/movieReducer";

export const getAsyncTvShows = (click) => async(dispatch,getState) => {
    try {
        const {page} = getState().movieReducer
        const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${click}?api_key=11eafabab15fc91d50417227c788a542&page=${page}`)
        dispatch(saveTvShows(data.results))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}

export const asyncGetTvShowsDetails = (tvShowId) => async(dispatch,getState) => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=11eafabab15fc91d50417227c788a542`)
        dispatch(saveTvShowsDetails(data))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}

export const asyncSimilarSeries = (seriesId) => async (dispatch,getState) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${seriesId}/similar?api_key=11eafabab15fc91d50417227c788a542`);
        dispatch(saveSimilarSeries(data.results))
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message));
    }
}