import React from "react";
import DeselectTagButton from "./DeselectTagButton";

const SelectedTag = ({ tag }) => {
  return (
    <div className="selected-tag">
      <span className="tag-text">{tag}</span>
      <DeselectTagButton tag={tag} />
    </div>
  );
};

export default SelectedTag;
