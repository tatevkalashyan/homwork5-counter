import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ["Apple", "Orange", "Banana", "Pomegranat"],
    //   colors: ['green', 'orange', 'yellow', 'red'],
    };
  }

  render() {
    return (
      <div>
          {console.log(this.props)}
        {this.state.value.map((fruit, key) => {
          return (
            <div key={key}>
                <p>{this.props}</p>
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
