import React, { Component } from "react";
import { connect } from "react-redux";

class Tag extends Component {
  render() {
    const { tag, clickable = false, selectTag } = this.props;
    return (
      <div
        className={clickable ? "tag clickable-tag" : "tag"}
        onClick={e => {
          e.preventDefault();
          clickable ? selectTag(tag) : console.log("NOT CLICKABLE");
        }}
      >
        <span className="tag-text">{tag}</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTag: tag => console.log("Selected tag: " + tag)
  };
};

const ConnectedTag = connect(null, mapDispatchToProps)(Tag);

export default ConnectedTag;
