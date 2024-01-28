import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name:"lang",
    initialState:{
        langKey:"en"
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.langKey = action.payload;
        }
    }
})

export const {changelanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;