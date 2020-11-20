import React, {Component} from 'react';
import './calc.css';

class  Calc extends Component {
    constructor () {
        super()
        this.handelClick = this.handelClick.bind(this)
    }

    state= {
        count:0,
    }

     handelClick () {
         this.setState({
             count: this.state.count+1
         })
        }

    render () {
        return (
            <div className="counter">
                <button>-</button>
                <div>{this.state.count}</div>
                <button onClick={this.handelClick}>+</button>
            </div>
        )
    }
};


 export default Calc;
