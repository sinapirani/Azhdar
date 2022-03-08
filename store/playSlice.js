import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
    name: 'playSlice',
    initialState:{
        status: false,
        autoPlay: false,
        isClosed: false,
        terminalY: 'above'
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
        },
        changeTerminalY: (state,action) => {
            state.terminalY = action.payload
        }

    }
})

export const {play,autoPlayStatus,changeTerminalStatus,changeTerminalY} = playSlice.actions
export default playSlice.reducer