import { configureStore } from "@reduxjs/toolkit";
import Play, { playSlice } from './playSlice'

export const store = configureStore({
    reducer:{
        Play: playSlice
    }
})