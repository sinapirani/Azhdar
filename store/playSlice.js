import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
    name: 'playSlice',
    initialState:{
        status: false,
        autoPlay: false,
        isClosed: false
    },
    reducers:{
        play: (state,action)=>{
            state.status = action.payload
        },
        autoPlayStatus: (state,action)=>{
            state.autoPlay = action.payload
        },
        changeTerminalStatus: (state,action)=>{
            state.isClosed = action.payload
        }

    }
})

export const {play,autoPlayStatus,changeTerminalStatus} = playSlice.actions
export default playSlice.reducer