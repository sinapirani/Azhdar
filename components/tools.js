import { useState } from "react"

export default function Tools({width}){


    return(
        <div style={{width}} className={` h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden `}>

            <div class="h-1/2 w-full flex justify-center items-center overflow-y-scroll z-20">
                <pre><code class="border-1  text-white border-black border-solid active:border-0" contenteditable="" id="input">let page = '@sinapiranix'</code></pre>
            </div>

            <div class="h-1/2 w-full flex justify-start gap-x-5 pl-7 items-center ">

                <button class=" z-20 flex justify-center items-center w-1/6 bg-transparent font-extrabold text-white/70 border-2 border-solid border-white/50 text-lg h-14 rounded-md hover:bg-white hover:text-fuchsia-500 duration-75" id="run">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <button class=" z-20 flex justify-center items-center w-1/6 font-extrabold text-white/70 text-lg h-14 border-2 border-solid border-white/50 rounded-md hover:bg-white hover:text-fuchsia-500 duration-75" id="run">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>

            </div>

            <div class="w-80 h-80 rounded-t-2xl rounded-b-xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-[120px] absolute z-10 left-0 top-0"></div>
            <div class="w-80 h-80 rounded-t-2xl rounded-b-xl rounded-r-3xl rounded-l-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 z-10 blur-[120px] absolute right-0 -bottom-10"></div>
        </div>
    )
}