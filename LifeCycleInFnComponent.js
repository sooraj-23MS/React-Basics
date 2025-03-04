import { Component, useEffect, useState } from "react"

const LifecycleFnChild = () => {

    const [stateChange,setStateChange] = useState(false);

    useEffect(()=>{
        console.log("Component Mounted");
        return ()=>{
            console.log("Component UnMounted");
        }
    },[])

    useEffect(()=>{
        console.log("Component Updated");
    },[stateChange])

    return(
        <div>
            <h2>Child Component</h2>
            <h3>State Change : {stateChange.toString()}</h3>
            <button onClick={()=>{setStateChange((prevState)=>!prevState)}}>Change State</button>
        </div>
    )
}

function LifeCycleInFnComponent(){

    const [show,setShow] = useState(false);

    return(
        <div>
            <h2>LifeCycle In FnComponent</h2>
            <h2>Parent Component</h2>
            <button onClick={()=>{setShow((prev)=>!prev)}}>{show ? "UnMount ChildComponent" : "Mount ChildComponent"}</button>
            {show && <LifecycleFnChild/>}
        </div>
    )
}
export default LifeCycleInFnComponent;
