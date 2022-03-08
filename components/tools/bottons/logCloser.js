import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { changeTerminalStatus } from "../../../store/playSlice"

export default function LogCloser(){


    const isClosed = useSelector((store)=> store.Play.isClosed)
    const toolsWidth = useSelector(state => state.Tools.width)
    const terminalY = useSelector(state=> state.Play.terminalY)

    const divStyle = {
        width: `${(toolsWidth/100)*12 }px`,
        height: `${(toolsWidth/100)*12 }px`,
        opacity: isClosed ? '1' : '0.3',
        backgroundColor: isClosed ? 'white' : 'transparent',
        transition: '0.4s',
        cursor: terminalY == 'blow'? 'not-allowed' : 'pointer'
    }
    const svgStyle ={
        'width': `${(toolsWidth/100)*7 }px`,
        'height': `${(toolsWidth/100)*7 }px`,
        'color': isClosed ? '#C9309D' : 'white'
    }

    const dispatch = useDispatch()
    const clickHandler = ()=>{
        if(terminalY == 'above'){
            dispatch(changeTerminalStatus(!isClosed))
        }
    }


    return(
        <>
            <abbr onClick={clickHandler} className={'z-40'}  title="terminal closer">
                <div style={divStyle} className="  text-white  flex justify-center items-center border-2 border-solid border-white/50 rounded-full " >
                    <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>               
                </div>
            </abbr>
        </>
    )
}