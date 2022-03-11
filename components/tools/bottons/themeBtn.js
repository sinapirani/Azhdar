import { useEffect, useState } from "react"
import { useSelector } from "react-redux"   


export default function ThemeChanger(){

    const width = useSelector((state) => state.Tools.width)
    const theme = useSelector(state=> state.Theme.theme)
    const [themeBackground, setThemeBackground] = useState('') 
    const themeStyles = useSelector(state=> state.Theme.themeStyles)
    console.log(themeStyles)

    const btnStyle = {
        'width': `${(width/100)*14}px`,
        height: `${(width/100)*7}px`,
    }
    const svgStyle = {
        'width': `${(width/100)*8}px`,
        height: `${(width/100)*8}px`,
    }

    useEffect(()=>{
        switch(theme){
            case 'breeze':
                setThemeBackground('linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))')
            break

            case 'sd':
                setThemeBackground('linear-gradient(140deg, rgb(255, 255, 255), rgb(255, 255, 255))')
            break
        }
    },[theme])

    const themeStyle = {
        'background': themeBackground,
        'width': `${(width/100)*4}px`,
        height: `${(width/100)*4}px`,
        borderRadius: '50px'
    }

    const absoluteStyle = {
        'width': `${(width/100)*14}px`,
    }
    const [optionStyle,setOptionStyle] = useState(0)

    return(
        <>
            <div style={btnStyle} className=" relative z-20 flex justify-center items-center bg-transparent  font-extrabold text-white text-lg  border-2 border-solid border-white/50 rounded-md   hover:text-fuchsia-500 duration-75" id="run">
                <div style={themeStyle} ></div>
                <div style={absoluteStyle} className="absolute top-0 z-30 bg-white text-black hover:text-black ">
                    {
                        themeStyles.map(theme => {
                            return(
                                <div>{theme.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
