import React, { Component } from "react";

class List extends Component  {
  constructor() {
    super();

    this.state = {
      value: ["Apple", "Orange", "Banana", "Pomegranat"],
    //   colors: ['green', 'orange', 'yellow', 'red'],
    };
  }

  render() {
    return (
      <div>
        {this.state.value.map((fruit, key) => {
          return (
            <div key={key}>
                <p>{fruit}</p>
              {/* {`${this.state.colors[key]} ${fruit}`} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
