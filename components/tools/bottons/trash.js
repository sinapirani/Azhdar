import { useDispatch,useSelector } from "react-redux"
import { setCode } from "../../../store/codeSlice"
export default function Trash(){

    const dispatch = useDispatch()
    const width = useSelector(state => state.Tools.width)

    const btnStyle = {
        'width': `${(width/100)*16}px`,
        height: `${(width/100)*10}px`,
    }
    const svgStyle = {
        'width': `${(width/100)*8}px`,
        height: `${(width/100)*8}px`,
    }
    return( 
        <button style={btnStyle} onClick={()=>dispatch(setCode(''))} className=" z-20 flex justify-center items-center  font-extrabold text-white/70 text-lg  border-2 border-solid border-white/50 rounded-md hover:bg-white hover:text-fuchsia-500 duration-75" id="run">
            <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
    )
}