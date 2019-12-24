import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

import { removeTag } from "../../actions/configActions";

class DeselectTagButton extends Component {
  render() {
    const { tag, deselectTag } = this.props;
    return (
      <FontAwesomeIcon
        icon={faTimes}
        onClick={e => deselectTag(tag)}
        className="remove-btn"
        cursor="pointer"
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deselectTag: tag => dispatch(removeTag(tag))
});

const ConnectedDeselectTagButton = connect(
  null,
  mapDispatchToProps
)(DeselectTagButton);

export default ConnectedDeselectTagButton;
