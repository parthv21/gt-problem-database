import React from "react";

const MetaInformation = ({ title, info }) => {
  return (
    <span style={{ marginRight: "10px" }}>
      <span className="sponsor-title">{title}: </span>
      <span className="sponsor-name">{info}</span>
    </span>
  );
};

export default MetaInformation;
