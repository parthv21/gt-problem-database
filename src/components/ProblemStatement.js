import React, { Component } from "react";

import "../styles/Problem.css";

class ProblemStatement extends Component {
  render() {
    const { problemStatement } = this.props;

    return <pre className="problem-statement">{problemStatement}</pre>;
  }
}

export default ProblemStatement;
