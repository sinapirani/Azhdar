import { createSlice } from "@reduxjs/toolkit";

const toolsSlice = createSlice({
    name:'toolsSlice',
    initialState:{
        width: ''
    },
    reducers:{
        changeWidth: (state,action) => {
            state.width = action.payload
        }
    }
})

export const {changeWidth} = toolsSlice.actions
export default toolsSlice.reducer