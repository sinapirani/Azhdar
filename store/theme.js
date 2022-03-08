import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        theme: 'breeze'
    },
    reducers:{
        changeTheme: (state,action) => {
            state.theme = action.payload
        }
    }
})
export const {reducers} = themeSlice.actions
export default themeSlice.reducer