import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./UserSlice";

const appStore = configureStore({
    reducer:{
        User:UserReducer,
    }
});

export default appStore