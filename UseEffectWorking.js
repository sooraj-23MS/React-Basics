import { useEffect, useState } from "react";

function UseEffectWorking(){
    const [checkEffect,setCheckEffect] = useState(0);

    // Runs on every render because no dependency array is provided.
    useEffect(()=>{
        console.log("Running without Dependency Array")
    })

    //Runs only after the first render.
    useEffect(()=>{
        console.log("Running with Empty Dependency Array")
        //Cleanup runs before unmount.
        return ()=>{
            console.log("cleanup")
        }
    },[]);

    // Runs after the first render and whenever state changes.
    useEffect(()=>{
        console.log("Running with Dependency Array")
    },[checkEffect]);

    return(
        <div>
            <h2>useEffect Hook...</h2>
            <button onClick={()=>{setCheckEffect((prev)=>!prev)}}>Click me</button>
        </div>
    )
}
export default UseEffectWorking;