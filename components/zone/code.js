


import React from 'react';

function Code({}) {
    return (
        <div className=' min-w-[100px] '>

            <div className="min-w-[300px] max-w-[350px] flex flex-col justify-center items-center bg-[#ffffffbd] rounded-xl overflow-hidden">

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



                <div id="codeContiner" className="w-full max-w-full overflow-y-scroll min-h-10 ">

                    <pre className="w-full py-3l overflow-hidden px-2"><div className="w-full select-none text-[12px] overflow-hidden language-javascript" id="code">sdasd</div></pre>

                </div>


            </div>

        </div>
    );
}

export default Code