import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// redux
import { adminRoutesActions } from "../../../redux/actions/admin/adminRouteActions";

class Profile extends Component {
  render() {
    return (
      <div className="dashboard_content_project">
        <div
          className="dashboard_content_project_add"
          id="addProject"
          onClick={this.props.adminRoutesActions.bind(this, "add")}
        >
          <h3>Add Project</h3>
          <i className="fas fa-plus" />
        </div>

        <div
          className="dashboard_content_project_edit"
          onClick={this.props.adminRoutesActions.bind(this, "edit")}
        >
          <h3>Edit Project</h3>
          <i className="fas fa-edit" />
        </div>
        <div
          className="dashboard_content_project_delete"
          onClick={this.props.adminRoutesActions.bind(this, "delete")}
        >
          <h3>Delete Project</h3>
          <i className="fas fa-trash-alt" />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  adminRoutesActions: PropTypes.func
};

export default connect(
  null,
  { adminRoutesActions }
)(Profile);
