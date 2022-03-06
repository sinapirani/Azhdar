import { createSlice } from "@reduxjs/toolkit";


export const playSlice = createSlice({
    name: 'playSlice',
    initialState:{
        code: ''
    },
    reducers:{
        changeCode: ()=>{state,action=>{
            state.code = action.payload
        }}

    }
})

export const {changeCode} = playSlice.actions
export default playSlice.reducer