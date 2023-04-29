import { Component } from "react";
class ClassBased extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        myNumber : 10
    }
    // myNumber = 10
    componentDidMount(){
        console.log("i have loaded o!")
    }
    componentDidUpdate(){
        console.log("something has changed")
    }
    componentWillUnmount(){
        console.log("component is going away")
    }
    increase = ()=>{
        this.setState({myNumber : this.state.myNumber+1})
    }
    render() { 
        return (
            <>
                <h1>Welcome to Class Based Components</h1>
                <h1>{this.state.myNumber}</h1>
                <h2>{this.props.myName}</h2>
                <button onClick={this.increase}>Increase</button>
            </>
        );
    }
}
 
export default ClassBased;