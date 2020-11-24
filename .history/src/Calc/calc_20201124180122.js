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

    handelClick (type) {
        if(type === "decrease") {
            this.setState({
                count: this.state.count -1
            })
        }
        else  if(type === "increase") {
            this.setState({
                count: this.state.count+1
            })
        } 
        else {
            if(type === "reset") {
                this.setState({
                    count: this.state.count = 0
                })
            }
        }

    }


    render () {
        return (
            <div className="counter">
                <button onClick={() => this.handelClick('decrease')}>-</button>
                <div className="number">{this.state.count}</div>
                <button onClick={() => this.handelClick('increase')}>+</button>
                <button onClick={() => this.handelClick('reset')}>Reset</button>
            </div>
        )
    }
};


 export default Calc;