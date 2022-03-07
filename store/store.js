import { configureStore } from "@reduxjs/toolkit";
import Play from './playSlice'
import Code from './codeSlice'
import Tools from './toolsSlice'

export const store = configureStore({
    reducer:{
        Play,
        Code,
        Tools
    }
})