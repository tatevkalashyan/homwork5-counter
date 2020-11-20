import React, {Component} from 'react';
import './calc.css';

class  Calc extends Component {


    state= {
        count:0,
    }

    const handel

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
