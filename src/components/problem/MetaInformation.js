import React from "react";
import parse from "html-react-parser";

const MetaInformation = ({ title, info }) => {
  return (
    <span style={{ marginRight: "10px" }}>
      <span className="meta-title">{title}: </span>
      <span className="meta-info">{parse(info)}</span>
    </span>
  );
};

export default MetaInformation;
