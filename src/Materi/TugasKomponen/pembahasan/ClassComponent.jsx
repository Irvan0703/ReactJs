import React from "react";

class ClassComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            value: 0
        }

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus(){
        this.setState({value:this.state.value +1})
    }

    handleMinus(){
        if (this.state.value > 0) {
            this.setState({value:this.state.value -1})
        }   
    }

    render() {
        return(
            <div>
                <h1>Hello {this.props.nama}</h1>
                <h3>Mencoba state di Class Component</h3>
                <button onClick={this.handleMinus}>-</button>
                <span>{` `} {this.state.value} {` `}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent;