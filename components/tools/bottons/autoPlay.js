import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { autoPlayStatus } from "../../../store/playSlice"

export default function AutoPlay(){


    const autoPlay = useSelector((store)=> store.Play.autoPlay)
    const toolsWidth = useSelector(state => state.Tools.width)

    const divStyle = {
        width: `${(toolsWidth/100)*12 }px`,
        height: `${(toolsWidth/100)*12 }px`,
        opacity: autoPlay ? '1' : '0.3',
        backgroundColor: autoPlay ? 'white' : 'transparent',
        transition: '0.4s'
    }
    const svgStyle ={
        'width': `${(toolsWidth/100)*7 }px`,
        'height': `${(toolsWidth/100)*7 }px`,
        'color': autoPlay ? '#C9309D' : 'white'
    }

    const dispatch = useDispatch()
    const clickHandler = ()=>{
        dispatch(autoPlayStatus(!autoPlay))
        console.warn(autoPlay)
    }


    return(
        <>
        <abbr onClick={clickHandler} className={'z-40 cursor-pointer'}  title="auto run">
                <div style={divStyle} className="  text-white  flex justify-center items-center border-2 border-solid border-white/50 rounded-full " >
                    <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>                     
                </div>
            </abbr>
        </>
    )
}