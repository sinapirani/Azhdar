import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCode} from '../../store/codeSlice';

function Input({}) {

    const dispatch = useDispatch();
    const code = useSelector(state => state.Code.code);
    const textAreaKeyDown = (e)=>{
        if(e.key == 'Enter'){
            dispatch(setCode(code+'\n'))
        }
    }

    return (
        <>
            <textarea onKeyDown={textAreaKeyDown} onChange={(e)=>dispatch(setCode(e.target.value))} className=" w-full h-full px-4 border-1  text-white bg-slate-900 active:border-0" id="input"></textarea>
        </>
    );
}

export default Input;