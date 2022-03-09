import { configureStore } from "@reduxjs/toolkit";
import Play from './playSlice'
import Code from './codeSlice'
import Tools from './toolsSlice'
import Theme from "./changeTheme";

export const store = configureStore({
    reducer:{
        Play,
        Code,
        Tools,
        Theme
    }
})