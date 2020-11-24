import React, {Component} from 'react';
import './calc.css';

class  Calc extends Component {
    constructor () {
        super()
        this.handelClickPlus = this.handelClickPlus.bind(this)
        this.handelClickMin = this.handelClickMin.bind(this)
    }

    state= {
        count:0,
    }

     handelClickPlus () {
         this.setState({
             count: this.state.count+1
         })
    }

    handelClickMin () {
        this.setState({
            count: this.state.count-1
        })
    }

    render () {
        return (
            <div className="counter">
                <button onClick={this.handelClickMin} attribute={this.state.count===0?"disabled":"visible"}>-</button>
                <div className="number">{this.state.count}</div>
                <button onClick={this.handelClickPlus}>+</button>
            </div>
        )
    }
};


 export default Calc;
