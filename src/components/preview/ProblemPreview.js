import React from "react";
import { Link } from "react-router-dom";
import ProblemStatement from "../problem/ProblemStatement";
import TagContainer from "../tag/TagContainer";
import MetaInformation from "../problem/MetaInformation";
import attributes from "../../constants/attributes";

const ProblemPreview = ({ problem }) => {
  var id = problem[attributes.uid];
  var problemStatement = problem[attributes.statement];
  var tags = problem[attributes.tags].split(",");
  var sponsor = problem[attributes.sponsor];
  var date = new Date(problem[attributes.timestamp]);
  return (
    <div key={id} className="problem-preview">
      <pre>
        <Link to={"/details/" + id} className="text-link" key={id}>
          <ProblemStatement problemStatement={problemStatement} />
        </Link>
        <MetaInformation title="Sponsor" info={sponsor} />
        <MetaInformation
          title="Created On"
          info={
            date.getMonth() + "-" + date.getDay() + "-" + date.getFullYear()
          }
        />
        <TagContainer tags={tags} clickable />
      </pre>
    </div>
  );
};

export default ProblemPreview;
