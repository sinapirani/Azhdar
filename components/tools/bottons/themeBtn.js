import { useEffect, useState } from "react"
import { useSelector } from "react-redux"   


export default function ThemeChanger(){

    const width = useSelector((state) => state.Tools.width)
    const theme = useSelector(state=> state.Theme.theme)
    const [themeBackground, setThemeBackground] = useState('') 
    const themeStyles = useSelector(state=> state.Theme.themeStyles)    
    const [showOption,setShowOption] = useState(false)


    const onThemeListClick = ()=>{

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

    const btnStyle = {
        'width': `${(width/100)*14}px`,
        height: `${(width/100)*7}px`,
    }
    const svgStyle = {
        'width': `${(width/100)*8}px`,
        height: `${(width/100)*8}px`,
    }

    const themeStyle = {
        'background': themeBackground,
        'width': `${(width/100)*4}px`,
        height: `${(width/100)*4}px`,
        borderRadius: '50px'
    }

    const absoluteStyle = {
        // 'width': `${(width/100)*14}px`,
        'bottom': `${(width/100)*7}px`,

    }
    const optionStyle = {
        'width': `${(width/100)*2.5}px`,
        'height': `${(width/100)*2.5 }px`,
    }
    console.log(optionStyle.width)

    return(
        <>
            <div style={btnStyle} className=" relative z-50 flex justify-center items-center bg-transparent  font-extrabold text-white text-lg  border-2 border-solid border-white/50 rounded-md cursor-pointer  hover:text-fuchsia-500 duration-75" id="run">
                <div style={themeStyle} ></div>
                <div onClick={onThemeListClick} style={absoluteStyle} className={`absolute rounded-lg px-2 py-2 z-50 bg-white text-black hover:text-black ${showOption? 'block' : 'hidden'}`}>
                    {
                        themeStyles.map((theme,key) => {
                            return(
                                <div className="flex gap-2 justify-center items-center w-22" key={key} >
                                    <span className="rounded-full" style={{...optionStyle,'background': theme.background}}></span>
                                    <span className=" font-normal text-sm w-16">{theme.name}</span>
                                </div>
                            ) 
                        })
                    }
                </div>
            </div>
        </>
    )
}
