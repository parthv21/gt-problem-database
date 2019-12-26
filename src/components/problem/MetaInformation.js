import React from "react";

const MetaInformation = ({ title, info }) => {
  return (
    <span style={{ marginRight: "10px" }}>
      <span className="meta-title">{title}: </span>
      <span className="meta-info">{info}</span>
    </span>
  );
};

export default MetaInformation;
