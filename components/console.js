import { useEffect,useState  } from "react";
import { useDispatch,useSelector } from "react-redux"
import { play } from "../store/playSlice";

export default function Console({bottom}){
    
    const dispatch = useDispatch();
    const code = useSelector(state=>state.Code.code)
    const isPlay = useSelector(state=>state.Play.status)
    const [htmlCode,setHtmlCode] = useState('')
    const log = (code)=>{
        if(typeof code !== 'object'){
            setHtmlCode(code)
        }else{
            setHtmlCode(JSON.stringify(code))    
        }
    }
    console.log = log

    useEffect(()=>{
        if(isPlay){
            try{
                eval(code)
                dispatch(play(false))
            }
            catch(err){
                if(err instanceof SyntaxError){
                    console.log(err.message.toString())
                    dispatch(play(false))
                }
                else{
                    console.log(err.toString())
                    dispatch(play(false))
                }
            }
        }else{

        }
    },[isPlay])

    return(
        <div style={{'bottom': `${bottom}px`}} className=' flex justify-center items-center text-white absolute min-w-[300px] rounded-md h-20 bg-slate-800'>
            {htmlCode}
        </div>
    )
}