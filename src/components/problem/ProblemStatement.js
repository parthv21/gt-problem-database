import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProblemStatement extends Component {
  render() {
    const { problemStatement, id, clickable = false } = this.props;

    return (
      <div className="problem-statement-container">
        {clickable ? (
          <Link to={"/details/" + id} className="text-link" key={id}>
            <span className="problem-statement selectable-problem-statement">
              {problemStatement}
            </span>
          </Link>
        ) : (
          <span className="problem-statement">{problemStatement}</span>
        )}
      </div>
    );
  }
}

export default ProblemStatement;
