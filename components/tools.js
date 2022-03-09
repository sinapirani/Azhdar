import { useState } from "react"
import Input from "./tools/input"
import Trash from "./tools/bottons/trash"
import Play from "./tools/bottons/play"
import LogCloser from "./tools/bottons/logCloser"
import AutoPlay from "./tools/bottons/autoPlay"
import { useSelector,useDispatch } from "react-redux"
import { changeWidth } from "../store/toolsSlice"
import ThemeChanger from "./tools/bottons/themeBtn"

export default function Tools({width}){

    const dispatch = useDispatch()
    dispatch(changeWidth(width))

    return(
        <div style={{width: `${width}px`}} className={` h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden `}>
            

            <div className="h-1/2 w-full flex justify-center items-center overflow-hidden z-20 mb-auto">
                <Input/>
            </div>

            <div className=" w-full flex flex-col justify-start pl-7 items-center mb-20 ">
                <div className="h-full w-full flex justify-start gap-x-5 items-center mb-2">
                    <Play />
                    <Trash/>
                    <AutoPlay />
                    <LogCloser/>
                </div>
                    
                <div className="w-full h-full">
                    <ThemeChanger/>
                </div>


            </div>

            
            <div className=" w-64 h-64 rounded-t-2xl rounded-b-xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-[150px] absolute z-10 left-0 top-0"></div>
            <div className="w-64 h-64 rounded-t-2xl rounded-b-xl rounded-r-3xl rounded-l-sm bg-gradient-to-r from-violet-500 to-red-800 z-10 blur-[130px] absolute right-0 -bottom-10"></div>
        </div>
    )
} 