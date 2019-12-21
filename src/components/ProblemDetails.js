import React, { Component } from "react";
import { connect } from "react-redux";

import { selectProblem } from "../reducer/problemsReducer";

import ProblemStatement from "./ProblemStatement";
import TagContainer from "./TagContainer";
import ProblemInformation from "./ProblemInformation";
import SponsorInformation from "./SponsorInformation";

class ProblemDetails extends Component {
  render() {
    const problem = this.props.problem;

    const problemStatement = problem["Problem Statement"];
    const sponsor = problem["Affiliated Organization"];
    const contactDetails = problem["Contact Details"];
    const stakeholders = problem["Stakeholders"];
    const description = problem["Problem Description"];
    const domain = problem["Problem Domain"];
    const tags = problem["Tags"].split(",");
    const implementationHistory = problem["Implementation History"];

    return (
      <div className="problem-details">
        <ProblemStatement problemStatement={problemStatement} />
        <SponsorInformation sponsor={sponsor} />
        <TagContainer tags={tags} />
        <ProblemInformation title="Stakeholders" description={stakeholders} />
        <ProblemInformation title="Problem Domain" description={domain} />
        <ProblemInformation title="Description" description={description} />
        <ProblemInformation
          title="Implementation History"
          description={implementationHistory}
        />
        <ProblemInformation title="Contact" description={contactDetails} />
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
