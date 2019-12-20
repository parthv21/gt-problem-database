import React, { Component } from "react";
import "../styles/Problem.css";

class ProblemStatement extends Component {
  render() {
    const problemStatement = this.props.problemStatement;

    return (
      <span className="problem-statement">
        <pre>{problemStatement}</pre>
      </span>
    );
  }
}

export default ProblemStatement;
