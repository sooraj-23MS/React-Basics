// Persist values without causing re-renders.

import { useEffect, useRef, useState } from "react";

const AccessDom = () =>{

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus(); // Auto-focus the input on mount
      console.log(inputRef.current)
    }, []);
  
    return (
        <div>
            <input ref={inputRef} placeholder="Focus on me!" />
            <button onClick={()=>{console.log(inputRef.current.value)}}>Get Text</button>
        </div>
    )
}

function UseRefWorking(){

    const value = useRef(0);

    const [displayValue,setDisplayValue]= useState(true)
    //useRef stores the value inside .current, so you should access it as value.current.
    
    useEffect(()=>{
        console.log("Component Re-rendered");
    })
    return(
        <div>
            <h2>useRef Hook...</h2>
            <h3>Value : {value.current}</h3>
            <button onClick={()=>{value.current += 1 ; console.log(value.current); }}>Click me</button>
            <button onClick={()=>{setDisplayValue((prev)=>!prev)}}>Re-Render</button>
            {/* The displayed value updates properly, but only when you intentionally trigger a re-render. */}
            <AccessDom/>
        </div>
    )
}
export default UseRefWorking;