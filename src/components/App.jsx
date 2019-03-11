import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import { buildFirebase, getRandomQuestion } from "../clients/firebase";

// Data from firebase:
//
// < question - id >
//   Object containing data for a single trivia question and answer
//   - question_text
//     String question text, e.g. "How many states are in the USA?"
//   - choices
//     Array of strings representing multiple choice answers
//   - correct_choice_index
//     Index of the correct answer in the choices array

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_question: {
        question_text: "How many states are in the US?",
        choices: ["6", "8", "50", "21"],
        correct_choice_index: 2,
        result: " ur rite"
      }
    };

    this.handleReset();
  }

  handleReset() {
    var firebaseDatabase = buildFirebase();
    var ref = firebaseDatabase.ref("/questions");
    ref.once("value", snap => {
      var values = snap.val();
      var question = getRandomQuestion(values);
      this.setState({
        current_question: question,
        result: ""
      });
    });
  }

  handleClick(buttonIndex) {
    if (buttonIndex === this.state.current_question.correct_choice_index) {
      this.setState({
        result: "Bingo"
      });
    } else {
      this.setState({
        result: "Wrong"
      });
    }
  }
  render() {
    return (
      <div className="app">
        <header id="trivia_header">
          <h1> Trivia!</h1>
        </header>
        <Question
          handleClick={buttonIndex => this.handleClick(buttonIndex)}
          firebase_question_text={this.state.current_question.question_text}
          theAnswers={this.state.current_question.choices}
          handleReset={() => this.handleReset()}
        />
        <div id="answer">{this.state.result}</div>
      </div>
    );
  }
}

export default App;
