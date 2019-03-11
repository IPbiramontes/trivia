import React, { Component } from "react";
// import components

class ResetButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleClick()} id="ResetButton">
          Next Question
        </button>
      </div>
    );
  }
}

export default ResetButton;
