import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({

    name:"gpt",
    initialState:{
        ShowGptPage:false
    },
    reducers:{
        ToggleGptPage:(state)=>{
            state.ShowGptPage = !state.ShowGptPage;
        }
    }

})

export const {ToggleGptPage} = GptSlice.actions;
export default GptSlice.reducer