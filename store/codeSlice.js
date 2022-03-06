import { createSlice } from "@reduxjs/toolkit"

export const codeSlice = createSlice({
    name: "code",
    initialState: {
        code: `let page = '@sinapiranix'
               console.log(page)`,
    },
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },
    },
})


export const { setCode } = codeSlice.actions;
export default codeSlice.reducer