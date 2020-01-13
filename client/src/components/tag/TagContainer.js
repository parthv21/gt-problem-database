import React, { Component } from "react";
import { connect } from "react-redux";

import Tag from "./Tag";

import "../../styles/tags.css";

class TagContainer extends Component {
  render() {
    const { tags, clickable = false } = this.props;
    return (
      <div className="tag-container">
        {tags.map((tag, index) => {
          return (
            <span key={"tag_" + index}>
              {<Tag tag={tag} clickable={clickable} />}
            </span>
          );
        })}
      </div>
    );
  }
}

const ConnectedTagContainer = connect()(TagContainer);

export default ConnectedTagContainer;
