import React, { Component } from "react";
// import components

class AnswerButton extends Component {
  render() {
    return (
      <div>
        <button
          style={{ marginLeft: "70%" }}
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

//Math.floor(Math.random()*100)
