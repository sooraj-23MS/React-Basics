import React, { createElement } from "react";

function WithoutJSX(){

    const headStyle = {color : "blue"}

    const element = React.createElement("h1",{ style : headStyle },"Hello JSX!")
    const props = React.createElement("p",null,"In React.createElement(type, props, ...children), the second argument represents the props (attributes) of the element. If an element doesn't need any props (such as className, id, onClick, etc.), we pass null.")
    const para = React.createElement("p",null,"The code does not contain JSX or HTML.  Instead, it uses React.createElement, which is a pure JavaScript way to create React elements.")

    return createElement("div",{className:"container"},element,para,props);
}
export default WithoutJSX;