import React from "react";

class StateInClsComponent extends React.Component{
    constructor(){
        super();
        this.state = {booleanValue : false}
    }

    render(){
        return(
        <div>
            <h3>State In Class Component</h3>
            <h2>Current Boolean Value : {this.state.booleanValue.toString()}</h2>
            <button onClick={()=>this.setState((prevState)=>({booleanValue : !prevState.booleanValue}))}>Change Boolean Value</button>
        </div>
        )
    }
}
export default StateInClsComponent;