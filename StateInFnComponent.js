import { useState } from "react";

function StateInFnComponent(){

    const [booleanValue,setBooleanValue]= useState(false)

    return(
        <div>
            <h3>State In Functional Component</h3>
            {/* Convert the boolean to a string. React does not render boolean values directly in the DOM */}
            <h2>Current Boolean Value : {booleanValue.toString()}</h2>
            <button onClick={()=>{ setBooleanValue((prevBooleanValue)=> !prevBooleanValue)}}>Change Boolean Value</button>
        </div>
    )
}
export default StateInFnComponent;