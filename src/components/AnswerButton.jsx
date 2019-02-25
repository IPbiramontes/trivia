import React, { Component } from "react";
// import components

class AnswerButton extends Component {
  render() {
    var margin = Math.floor(Math.random() * 80 * 2) - 80 + "%";
    return (
      <div>
        <button
          style={{ marginLeft: margin }}
          onClick={() => this.props.handleClick()}
          id="AnswerButton"
        >
          {this.props.answer_choice}
        </button>
      </div>
    );
  }
}

export default AnswerButton;
