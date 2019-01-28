import React, { Component } from "react";
// import components

class AnswerButton extends Component {
  render() {
    return (
      <div>
        <button id="AnswerButton">{this.props.answer_choice}</button>
      </div>
    );
  }
}

export default AnswerButton;
