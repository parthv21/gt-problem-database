import React, { Component } from "react";
import { connect } from "react-redux";

import { getSelectedTags } from "../../reducer/configReducer";

import SelectedTag from "./SelectedTag";

class SelectedTags extends Component {
  render() {
    const { tags } = this.props;

    return tags.length > 0 ? (
      <div className="selected-tag-container">
        <span className="selected-tags-title">Selected Tags </span>
        {tags.map((tag, index) => {
          return <SelectedTag tag={tag} key={"tag_" + index} />;
        })}
      </div>
    ) : (
      <div />
    );
  }
}

const mapStateToProps = state => ({
  tags: getSelectedTags(state)
});

const ConnectedSelectedTags = connect(mapStateToProps, null)(SelectedTags);

export default ConnectedSelectedTags;
