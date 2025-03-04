import React, { Component } from "react";

class LifeCycleClsChild extends React.Component{

    constructor(){
        super();
        this.state = {ComponentState : false}
    }

    componentDidMount(){
        console.log("Component Mounted")
      
    }
    componentDidUpdate(prevState,prevProps){
        if(prevState.ComponentState !== this.state.ComponentState){
            console.log("Component Updated");
        }
    }
    componentWillUnmount(){
        console.log("Component UnMounted")
    }

    render(){
        return(
            <div>
                <h2>Child Component</h2>
                <h3>State Change : {this.state.ComponentState.toString()}</h3>
                <button onClick={()=>{this.setState((prev)=>({ComponentState:!prev.ComponentState}))}}>Change State</button>
            </div>
        )
    }

}

class LifeCycleInClsComponent extends React.Component{

    constructor(){
        super()
        this.state = {ShowComponent : false}

    }
   
    render(){
        return(
            <div>
                <h2>LifeCycle In ClsComponent</h2>
                <h3>Parent Component</h3>
                <button onClick={()=>{this.setState((prev)=>({ShowComponent:!prev.ShowComponent}))}}>{this.state.ShowComponent ? "UnMount ChildComponent" : "Mount ChildComponent"}</button>
                {this.state.ShowComponent && <LifeCycleClsChild/>}
            </div>
        )
    }

}
export default LifeCycleInClsComponent;