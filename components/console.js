import { useEffect,useState  } from "react";
import { useDispatch,useSelector } from "react-redux"
import { play } from "../store/playSlice";

export default function Console({bottom}){
    
    const dispatch = useDispatch();
    const code = useSelector(state=>state.Code.code)
    const isPlay = useSelector(state=>state.Play.status)
    const [htmlCode,setHtmlCode] = useState('')
    const log = (code)=>{
        setHtmlCode(code)
    }
    console.log
    let EvalPromise = new Promise((resolve,reject)=>{
        try{
            eval(code)
            resolve('success')
        }
        catch(err){
            if(err instanceof SyntaxError){
                reject(err.message)
            }
            else{
                reject('error')
            }
        }
    })

    useEffect(()=>{
        if(isPlay){
            EvalPromise.then(()=>{
                setCompile('success')
                dispatch(play(false))
            }).catch(err=>{
                console.log(err)
                dispatch(play(false))
            })
        }else{

        }
    },[isPlay])

    return(
        <div style={{'bottom': `${bottom}px`}} className='absolute min-w-[300px] rounded-md h-20 bg-slate-800'>
            {htmlCode}
        </div>
    )
}