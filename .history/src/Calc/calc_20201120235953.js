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

    function handelClick () {

    }

    render () {
        return (
            <div className="counter">
                <button>-</button>
                <div>{this.state.count}</div>
                <button onClick={handelClick}>+</button>
            </div>
        )
    }
};


 export default Calc;
