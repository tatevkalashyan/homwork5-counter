import React, {Component} from 'react';
import './calc.css';

class  Calc extends Component {


    state= {
        count:0
    }

    render () {
        return (
            <div className="counter">
                <button>-</button>
                <div>0</div>
                <button>+</button>
            </div>
        )
    }
};


 export default Calc;
