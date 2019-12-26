import React, { Component } from "react";
import { connect } from "react-redux";

import { selectProblem } from "../../reducer/problemsReducer";

import ProblemStatement from "./ProblemStatement";
import TagContainer from "../tag/TagContainer";
import ProblemInformation from "./ProblemInformation";
import MetaInformation from "./MetaInformation";
import attributes from "../../constants/attributes";

import "../../styles/problem.css";

class ProblemDetails extends Component {
  render() {
    const problem = this.props.problem;

    const problemStatement = problem[attributes.statement];
    const sponsor = problem[attributes.sponsor];
    const contactDetails = problem[attributes.contact];
    const stakeholders = problem[attributes.stakeholders];
    const description = problem[attributes.description];
    const domain = problem[attributes.domain];
    const tags = problem[attributes.tags].split(",");
    const implementationHistory = problem[attributes.history];
    const date = new Date(problem[attributes.timestamp]);

    return (
      <div className="problem-details">
        <div className="problem-header">
          <ProblemStatement problemStatement={problemStatement} />
          <MetaInformation title="Sponsor" info={sponsor} />
          <MetaInformation
            title="Created On"
            info={
              date.getMonth() +
              1 +
              "/" +
              date.getDate() +
              "/" +
              date.getFullYear()
            }
          />
          <TagContainer tags={tags} />
        </div>

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
