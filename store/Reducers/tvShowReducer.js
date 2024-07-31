import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    TvShows: [],
    similar: [],

    TvShowsDetails: {}
}

export const TvShowReducer = createSlice({
    name: 'TvShows',
    initialState,
    reducers: {
        saveTvShows: (state, action) => {
            state.TvShows = action.payload
        },
        saveTvShowsDetails: (state, action) => {
            state.TvShowsDetails = action.payload
        },
        saveSimilarSeries: (state, action) => {
            state.similar = action.payload;
          },
    }
})

export const { saveTvShows, saveTvShowsDetails,saveSimilarSeries } = TvShowReducer.actions
export default TvShowReducer.reducer