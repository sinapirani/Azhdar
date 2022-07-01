import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import hljs from 'highlight.js';
import { current } from '@reduxjs/toolkit';

function Code({mainHeight}) {

    const code = useSelector(state => state.Code.code)
    const hljsEl = useRef(null)
    const codeContainer = useRef(null)

    useEffect(()=>{
        hljs.highlightBlock(hljsEl?.current)
        if(codeContainer.current.scrollHeight > mainHeight/2){
            codeContainer.current.style.overflowY = 'scroll'
        }else{
            codeContainer.current.style.overflowY = 'hidden'
        }

    },[code])


    useEffect(()=>{
        codeContainer?.current?.style.maxHeight = `${mainHeight/2}px` 
        codeContainer?.current?.style.maxWidth = `${mainHeight/1 }px` 
    },[mainHeight])
    return (
        <div className='flex justify-center items-center '>

            <div className="min-w-[350px] max-w-[80%] flex flex-col justify-center items-center bg-[#ffffffbd] rounded-xl overflow-hidden">

                <div className="w-full flex justify-center items-center px-2 h-7">
                    <div className="flex w-1/6 justify-evenly">
                        <div className="w-[10px] h-[10px] bg-gray-800 opacity-25 rounded-full"></div>
                        <div className="w-[10px] h-[10px] bg-gray-800 opacity-25 rounded-full"></div>
                        <div className="w-[10px] h-[10px] bg-gray-800 opacity-25 rounded-full"></div>
                    </div>

                    <div className="w-5/6 flex justify-center items-center ">
                        <p className="text-[12px] text-gray-800 text-opacity-25 select-none">JavaScript Code</p>
                    </div>

                </div>



                <div id="codeContiner" ref={codeContainer} className="w-full max-w-full overflow-y-scroll min-h-[10px] z-20 px-2 pb-3">

                    <pre className="w-full py-3l overflow-hidden px-2"><div ref={hljsEl} className="w-full select-none text-[15 px] overflow-hidden language-javascript" dangerouslySetInnerHTML={{'__html': code}} id="code"></div></pre>

                </div>


            </div>

        </div>
    );
}

export default Code