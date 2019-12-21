import React from "react";
import "../styles/Problem.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <span>{title}</span>
    </div>
  );
};

export default SectionTitle;
