import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import AnswerButton from "./AnswerButton.jsx";
import ResetButton from "./ResetButton.jsx";
// import components

class Question extends Component {
  render() {
    return (
      <div>
        <QuestionText question_text="this is question text" />
        <AnswerButton answer_choice="a" />
        <AnswerButton answer_choice="b" />
        <AnswerButton answer_choice="c" />
        <AnswerButton answer_choice="d" />
        <ResetButton />
      </div>
    );
  }
}

export default Question;
