import { useState } from "react"
import Input from "./tools/input"
import Trash from "./tools/bottons/trash"
import Play from "./tools/bottons/play"
import AutoPlay from "./tools/bottons/autoPlay"
import { useSelector,useDispatch } from "react-redux"

export default function Tools({width}){

    const dispatch = useDispatch()
    

    return(
        <div style={{width: `${width}px`}} className={` h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden `}>
            

            <div className="h-1/2 w-full flex justify-center items-center overflow-hidden z-20">
                <Input/>
            </div>

            <div className="h-1/2 w-full flex justify-start gap-x-5 pl-7 items-center ">
                <Play width={width}/>
                <Trash width={width}/>
                <AutoPlay width={width}/>
            </div>

            
            <div className="w-80 h-80 rounded-t-2xl rounded-b-xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-[150px] absolute z-10 left-0 top-0"></div>
            <div className="w-80 h-80 rounded-t-2xl rounded-b-xl rounded-r-3xl rounded-l-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 z-10 blur-[150px] absolute right-0 -bottom-10"></div>
        </div>
    )
}