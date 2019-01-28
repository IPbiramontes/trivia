import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import AnswerButton from "./AnswerButton.jsx";
import ResetButton from "./ResetButton.jsx";
// import components

class Question extends Component {
  render() {
    var answerButtons = [];
    for (var i = 0; i < this.props.theAnswers.length; i++) {
      var answer_text = this.props.theAnswers[i];
      answerButtons.push(<AnswerButton answer_choice={answer_text} />);
    }
    return (
      <div>
        <QuestionText question_text={this.props.firebase_question_text} />
        {answerButtons}
        <ResetButton />
      </div>
    );
  }
}

export default Question;
