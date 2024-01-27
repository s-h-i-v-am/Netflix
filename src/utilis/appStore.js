import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./UserSlice";
import MovieReducer from "./MovieSlice"

const appStore = configureStore({
    reducer:{
        User:UserReducer,
        Movie:MovieReducer,
    }
});

export default appStore