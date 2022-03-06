import { useEffect, useState } from "react"
import Code from "./zone/code"
import Console from "./console"

export default function Zone({width,theme}){

    const [colorPalette,setColorPalette] = useState(theme)
    const [bottom,setBottom] = useState(123)


    // useEffect(()=>{
    //     setTimeout(() => {
    //         setBottom(bottom+5)
    //         console.log(bottom)
    //     }, 20);
    // },[bottom])

    switch(theme){
        case 'breeze0':
            setColorPalette({
                b:'b'
        })
    }


    return(
        <div style={{width}} className={`relative flex justify-center items-center bg-gradient-to-br from-[#6B3DEC] to-[#C9309D] h-screen`}>
            <Code/>
            <Console bottom={bottom}/>
        </div>
    )
}