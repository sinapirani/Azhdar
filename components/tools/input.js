import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCode} from '../../store/codeSlice';

function Input({}) {

    const dispatch = useDispatch();

    return (
        <>
            <pre><code onInput={(e)=>dispatch(setCode(e.currentTarget.innerHTML))} className="border-1  text-white border-black border-solid active:border-0" contentEditable="" id="input">let page = '@sinapiranix'</code></pre>
        </>
    );
}

export default Input;