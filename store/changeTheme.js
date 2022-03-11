import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        theme: 'breeze',
        themeStyles:[
            {'name': 'breeze', 'background': 'linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))'},
            {'name': 'crismon', 'background': 'linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52))'},
            {'name': 'meadow', 'background': 'linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))'},
            {'name': 'midnight', 'background': 'linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))'},
            {'name': 'raindrop', 'background': 'linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))'},
            {'name': 'sunset', 'background': 'linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))'}
        ]
    },
    reducers:{
        changeTheme: (state,action) => {
            state.theme = action.payload
        }
    }
})
export const {reducers} = themeSlice.actions
export default themeSlice.reducer