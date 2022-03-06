
import Head from "next/head"
import Zone from "../components/zone"
import Tools from "../components/tools"
import Resizer from "../components/resizer"
import { useEffect, useState } from "react"
import { useRef } from "react"

export default function App(){

  const [mainWidth,setMainWidth] = useState(0)
  const [zoneWidth,setZoneWidth] = useState(0)
  const [toolsWidth,setToolsWidth] = useState(0)
  const [resizerLeft,setResizerLeft] = useState(0)
  const [MainMoved,setMainMoved] = useState(false)
  const [resizerClicked,setResizerClicked] = useState(false)
  const [theme,setTheme] = useState('breeze')

  const mainMouseHandler = (e)=>{
    if(resizerClicked){
      setResizerLeft(e.pageX - 1/5)
      setToolsWidth(e.pageX)
      setZoneWidth(mainWidth - toolsWidth) 
      console.log(mainWidth-toolsWidth)
    } 
  }
  const resizerMouseChanger = (value)=>{
    setResizerClicked(value)
  }

  useEffect(()=>{

  },[resizerClicked])


  const main = useRef(null)
  useEffect(()=>{
    setMainWidth(main.current.offsetWidth)
    setResizerLeft(`${mainWidth/ 2 - 1.5}px`)
    setZoneWidth(mainWidth/2)
    setToolsWidth(mainWidth/2 )
  },[main.current])



  return(
    <>
      <Head>
        <title>code to image</title>
      </Head>

      <main className=" flex w-full h-screen bg-slate-400 relative overflow-hidden" onMouseUp={()=>setResizerClicked(false)} onMouseMove={mainMouseHandler} ref={main} >

        <Resizer width={'3px'} left={resizerLeft} resizerMouseChanger={resizerMouseChanger}/>
        <Tools width={`${toolsWidth}px`}/>
        <Zone width={`${zoneWidth}px`} theme={theme}/>
      </main>
    </>
  )
}