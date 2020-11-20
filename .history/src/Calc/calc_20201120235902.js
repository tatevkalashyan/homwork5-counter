import React, {Component} from 'react';
import './calc.css';

class  Calc extends Component {
    constructor () {
        super()
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
                <button>+</button>
            </div>
        )
    }
};


 export default Calc;
