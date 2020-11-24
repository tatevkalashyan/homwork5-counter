import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();

    this.state = {
      value: ["Apple", "Orange", "Banana", "Pomegranat"],
      colors: ['green', 'orange', 'yellow', 'red'],
    };
  }

  render() {
    return (
      <div>
        {this.state.value.map((fruit, key) => {
          return (
            <div key={key}>
                <p>{thi}</p>
              <p>{fruit}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
