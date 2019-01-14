import React, { Component } from 'react';
import QuestionText from './QuestionText.jsx';
import AnswerButton from './AnswerButton.jsx';
import ResetButton from './ResetButton.jsx';
// import components

class Question extends Component {
  
  render() {
    return (
      <div>
        <QuestionText/>
        <AnswerButton/>
        <ResetButton/>
      </div>
    );
  }
}

export default Question;