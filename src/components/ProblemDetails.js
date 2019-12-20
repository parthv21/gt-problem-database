import React, { Component } from "react";
import { connect } from "react-redux";
import Linkify from "linkifyjs/react";
import { selectProblem } from "../reducer/problemsReducer";

class ProblemDetails extends Component {
  render() {
    const problem = this.props.problem;

    const problemStatement = problem["Problem Statement"];
    const sponsor = problem["Affiliated Organization"];
    const contactDetails = problem["Contact Details"];
    const stakeholders = problem["Stakeholders"];
    const problemDescription = problem["Problem Description"];
    const domain = problem["Problem Domain"];
    const tags = problem["Tags"];
    const implementationHistory = problem["Implementation History"];

    return (
      <div>
        <div>{problemStatement}</div>
        <pre>
          <Linkify>{contactDetails}</Linkify>
        </pre>
        <pre>
          <Linkify>{problemDescription}</Linkify>
        </pre>
        <pre>
          <Linkify>{implementationHistory}</Linkify>
        </pre>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { params } = props.match;
  const id = params.id;

  return {
    problem: selectProblem(state, id)
  };
};

const connectedProblemDetails = connect(mapStateToProps)(ProblemDetails);

export default connectedProblemDetails;
