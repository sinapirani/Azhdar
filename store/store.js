import { configureStore } from "@reduxjs/toolkit";
import Play from './playSlice'
import Code from './codeSlice'

export const store = configureStore({
    reducer:{
        Play,
        Code
    }
})