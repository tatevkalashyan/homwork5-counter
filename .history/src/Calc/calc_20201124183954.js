import React, { Component } from "react";
import "./calc.css";

class Calc extends Component {
  constructor() {
    super();
    this.handelClick = this.handelClick.bind(this);
  }

  state = {
    count: 0,
  };

  handelClick(type) {
    if (type === "decrease") {
      this.setState({
        count: this.state.count - 1,
      });
    } else if (type === "increase") {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      if (type === "reset") {
        this.setState({
          count: (this.state.count = 0),
        });

      }
    }
  }

  render() {
    return (
      <div className="counter">
        <div className="number">{this.state.count}</div>
        <div className="buttons">
          <button onClick={() => this.handelClick("decrease")} disabled={this.}>-</button>
          <button onClick={() => this.handelClick("increase")}>+</button>
          <button onClick={() => this.handelClick("reset")}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Calc;
