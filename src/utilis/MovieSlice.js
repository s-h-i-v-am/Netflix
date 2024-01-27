import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlaying:null,
        movieTrailer:null,
        PopularMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlaying = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies} = MovieSlice.actions;
export default MovieSlice.reducer;