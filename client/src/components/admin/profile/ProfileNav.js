import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// redux
import { adminRoutesActions } from "../../../redux/actions/admin/adminRouteActions";

class UserNav extends Component {
  render() {
    return (
      <ul className="project_nav">
        {/* <li onClick={this.props.adminRoutesActions.bind(this, "add")}>
          Add Project
        </li> */}
        <li onClick={this.props.adminRoutesActions.bind(this, "edit")}>
          Edit Profile
        </li>
        <li onClick={this.props.adminRoutesActions.bind(this, "delete")}>
          Delete Account
        </li>
      </ul>
    );
  }
}

export default connect(
  null,
  { adminRoutesActions }
)(UserNav);
