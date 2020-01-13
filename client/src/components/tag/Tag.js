import React, { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

import { addTag } from "../../actions/configActions";
import { stripHtml } from "../../utils/stringUtils";

class Tag extends Component {
  render() {
    const { tag, clickable = false, selectTag } = this.props;
    return (
      <div
        className={clickable ? "tag clickable-tag" : "tag"}
        onClick={e => {
          e.preventDefault();
          clickable ? selectTag(stripHtml(tag)) : console.log("NOT CLICKABLE");
        }}
      >
        <span className="tag-text">{parse(tag)}</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTag: tag => dispatch(addTag(tag))
  };
};

const ConnectedTag = connect(null, mapDispatchToProps)(Tag);

export default ConnectedTag;
