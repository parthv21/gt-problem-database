import React, { Component } from "react";
import { connect } from "react-redux";

import { getSelectedTags } from "../../reducer/configReducer";

import SelectedTag from "./SelectedTag";

class SelectedTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="selected-tag-container">
        {tags.map((tag, index) => {
          return <SelectedTag tag={tag} key={"tag_" + index} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: getSelectedTags(state)
});

const ConnectedSelectedTags = connect(mapStateToProps, null)(SelectedTags);

export default ConnectedSelectedTags;
