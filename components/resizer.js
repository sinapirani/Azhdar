

import React from 'react';

function Resizer({width,left,resizerMouseChanger}) {

    const resizeClicked = ()=>{
        resizerMouseChanger(true)
    }

    return (
        <div onMouseDown={resizeClicked} style={{width, 'left':left }} className='bg-slate-600 absolute h-screen z-20 cursor-col-resize'>
            
        </div>
    );
}

export default Resizer;