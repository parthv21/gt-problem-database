import React from "react";
import ProblemStatement from "../problem/ProblemStatement";
import TagContainer from "../tag/TagContainer";
import MetaInformation from "../problem/MetaInformation";
import attributes from "../../constants/attributes";

import "../../styles/problem.css";

const ProblemPreview = ({ problem }) => {
  var id = problem[attributes.uid];
  var problemStatement = problem[attributes.statement];
  var tags = problem[attributes.tags].split(",");
  var sponsor = problem[attributes.sponsor];
  var date = new Date(problem[attributes.timestamp]);
  return (
    <div key={id} className="problem-preview">
      <ProblemStatement problemStatement={problemStatement} id={id} clickable />
      <MetaInformation title="Sponsor" info={sponsor} />
      <MetaInformation
        title="Created On"
        info={date.getMonth() + "-" + date.getDay() + "-" + date.getFullYear()}
      />
      <TagContainer tags={tags} clickable />
    </div>
  );
};

export default ProblemPreview;
