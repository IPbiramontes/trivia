import React, { Component } from 'react';
// import components


class QuestionText extends Component {
  
  render() {
    return (
      <div>
        {this.props.question_text}
      </div>
    );
  }
}

export default QuestionText;