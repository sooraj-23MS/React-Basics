
const Child = (props) =>{
    return(
        <div>
            <h3>Child Component</h3>
            <h4>Data Passed From Parent : <u style={{color:"red"}}>{props.propsData}</u></h4>
        </div>
        )
}

const PropsParent = () =>{
    return(
        <div>
            <h3>Props To Pass Data To Another Component</h3>
            <h2>***********************</h2>
            <Child propsData = "Data From Parent"/>
        </div>
        )
}
export default PropsParent;


    

