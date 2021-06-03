const { Component } = require("react");




class FirstComponent extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h1>Hello This is {this.props.title} in this app</h1>
            <h3>{this.props.children}</h3>
        </div>
    }
}

export default FirstComponent