import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../Common/MovieApi'
import { ApiKey } from '../Common/ApiKey'

export const fetchAsyncMovies = createAsyncThunk(
    "movie/fetchAsyncMovies",
    async () => {
        const movieText = "Mission"
        const response = await MovieApi
            .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
        return response.data
    })
export const fetchAsyncShows = createAsyncThunk(
    "show/fetchAsyncShows",
    async () => {
        const movieText = "friend"
        const response = await MovieApi
            .get(`?apiKey=${ApiKey}&s=${movieText}&type=series`)
        return response.data
    })
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "show/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await MovieApi
            .get(`?apiKey=${ApiKey}&i=${id}&Plot=full`)
        console.log(response.data);
        return response.data
    })
const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

export const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            // console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            // console.log("fetched succesfully");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            // console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            // console.log("fetched succesfully");
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            // console.log("fetched succesfully");
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})
export const { removeSelectedMovieOrShow } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default MovieSlice.reducer
