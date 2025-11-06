"use client"

import { useState } from "react"

export default function PrevStatePage(){
    const [count, setCount] = useState(0)
    const onClickCountUP=()=>{
        setCount((prev) => prev +1)
        setCount((qwer) => qwer +1)
        setCount((asdf) => asdf +1)
        setCount((zxcv) => zxcv +1)
     
    }

    return (
        <>
        <div>{count}</div>
        <button onClick={onClickCountUP}>카운트올리기</button>
        </>
    )
   
}