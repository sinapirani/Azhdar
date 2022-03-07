import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
    name: 'playSlice',
    initialState:{
        status: false,
        autoPlay: false
    },
    reducers:{
        play: (state,action)=>{
            state.status = action.payload
        },
        autoPlayStatus: (state,action)=>{
            state.autoPlay = action.payload
        }

    }
})

export const {play,autoPlayStatus} = playSlice.actions
export default playSlice.reducer