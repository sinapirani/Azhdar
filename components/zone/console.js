import { useEffect,useState  } from "react";
import { useDispatch,useSelector } from "react-redux"
import { play } from "../../store/playSlice";
import { changeTerminalStatus } from "../../store/playSlice";

export default function Console(){
    
    const dispatch = useDispatch();
    const code = useSelector(state=>state.Code.code)
    const isPlay = useSelector(state=>state.Play.status)
    const isAuto = useSelector(state=>state.Play.autoPlay)
    const [htmlCode,setHtmlCode] = useState('')
    const isClosed = useSelector(state=>state.Play.isClosed)
    const [bottom,setBottom] = useState(0)

    //customize console.log
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
        }
    },[isPlay])

    useEffect(()=>{
        if(isAuto){
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
        }
    },[code])

    useEffect(()=>{
        if(isClosed){
            window.bottomInterval = setInterval(() => {
                if(bottom == 0){
                    setBottom(old => old-5)
                }
            }, 30);
        }
    },[isClosed])

    useEffect(()=>{
        if(bottom <= -200){
            clearInterval(window.bottomInterval)
            dispatch(changeTerminalStatus(false))
        }
    },[bottom])

    return(
        <div style={{'bottom': `${bottom}px`, width: '100%',maxWidth: '100%', height: '200px'}} className=' flex justify-start items-center px-3 absolute z-20 text-white min-w-[300px] rounded-md h-20 bg-slate-800'>
            {htmlCode}
        </div>
    )
}