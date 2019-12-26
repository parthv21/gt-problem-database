import React from "react";
import Linkify from "linkifyjs/react";

import SectionTitle from "./SectionTitle";

const ProblemInformation = ({ title, description }) => {
  return (
    <div>
      <SectionTitle title={title} />
      <pre className="problem-description">
        <Linkify>{description}</Linkify>
      </pre>
    </div>
  );
};

export default ProblemInformation;
