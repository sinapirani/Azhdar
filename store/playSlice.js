import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
    name: 'playSlice',
    initialState:{
        status: false
    },
    reducers:{
        play: (state,action)=>{
            state.status = action.payload
        }

    }
})

export const {play} = playSlice.actions
export default playSlice.reducer