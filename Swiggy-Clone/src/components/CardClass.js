import React from "react";
import Heading from "./Heading";

class CardClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 10
        };
        console.log(props?.name, this.state.count2);
    }
    componentDidMount(){
        console.log("first")
    }
    componentDidUpdate(){
        console.log("second")
    }
    componentWillUnmount(){
        console.log("last")
    }
    render() {
        return (
            <>
            <Heading/>
                <button className="btn" onClick={() => { 
                    this.setState({ count: this.state.count + 1 });
                }}>
                    Increase state
                </button>
                <h1>{this.state.count}</h1>
                <h1>This is class props {this.props?.name}</h1>
                <h1>This is state {this.state.count}</h1>
            </>
        );
    }
}
export default CardClass;
