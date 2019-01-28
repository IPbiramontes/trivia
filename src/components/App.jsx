import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";

class App extends Component {
  render() {
    var setOfAnswers = ["2", "8", "50", "21"];
    return (
      <div className="app">
        Trivia!
        <Question firebase_question_text="why?" theAnswers={setOfAnswers} />
      </div>
    );
  }
}

export default App;
