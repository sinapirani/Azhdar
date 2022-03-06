import { useState } from "react"
import Code from "./zone/code"

export default function Zone({width,theme}){

    const [colorPalette,setColorPalette] = useState(theme)
    switch(theme){
        case 'breeze0':
            setColorPalette({
                b:'b'
        })
    }


    return(
        <div style={{width}} className={`flex justify-center items-center bg-gradient-to-br from-[#6B3DEC] to-[#C9309D] h-screen`}>
            <Code/>
        </div>
    )
}