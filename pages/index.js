
import Head from "next/head"
import Main from "../components/main"
import { useState } from "react/cjs/react.production.min"

export default function App(){

  let screenWidth = widocument.documentElement.offsetWidth

  return(
    <>
      <Head>
        <title>code to image</title>
      </Head>

      <main className=" flex w-full h-screen bg-slate-400 overflow-hidden">

        <Main width={`${screenWidth}px`}/>
        <div></div>

      </main>
    </>
  )
}