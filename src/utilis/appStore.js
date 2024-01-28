import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./UserSlice";
import MovieReducer from "./MovieSlice"
import GptReducer from "./GptSlice"
import LanguageReducer from "./LanguageSlice"

const appStore = configureStore({
    reducer:{
        User:UserReducer,
        Movie:MovieReducer,
        Gpt:GptReducer,
        Language:LanguageReducer,
    }
});

export default appStore