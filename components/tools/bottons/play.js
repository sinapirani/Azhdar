import { useDispatch } from "react-redux";
import { play } from "../../../store/playSlice";

export default function Play({width}){

    const dispatch = useDispatch();

    return(
        <button onClick={()=>dispatch(play(true))} className=" z-40 flex justify-center items-center w-1/6 bg-transparent font-extrabold text-white/70 border-2 border-solid border-white/50 text-lg h-14 rounded-md hover:bg-white hover:text-fuchsia-500 duration-75" id="run">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    )
}