import React from "react";

class Count extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            name: 'Alex'
        }
    }
    changeCount = ()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    changeName = ()=>{
        this.setState({
            name: 'Roman'
        })
    }
    render(){
        return(
            <div>
                <h2>Count is : {this.state.count}</h2>
                <button onClick={this.changeCount}>Update</button>
                <h2>Name is : {this.state.name}</h2>
                <button onClick={this.changeName}>Change</button>
            </div>
        )
    }
};

export default Count;