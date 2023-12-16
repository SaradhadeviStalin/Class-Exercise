import { Component } from "react";
class StateClassCom extends Component{
    state={
        color:"pink",
        price:"234"
    }
    handleChange=()=>{this.setState({color:"blue"})}
    render()
    {
        return(
        <div>
            <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
            <button onclick = {this.handleChange}>Click me</button>
        </div>
        )
    }
}
export default StateClassCom;