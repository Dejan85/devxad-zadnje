import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

// redux action
import { dashboardNavigation } from "../../../../redux/actions/layout/layoutActions";

class Project extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projects_container fadeInRightBig">
          <div className="menu_container">
            <div
              className="add_projects_btn"
              onClick={this.props.dashboardNavigation.bind(this, "addproject")}
            >
              <div className="add_projects_btn_container">
                <p>Add Project</p> <i className="fas fa-plus" />
              </div>
            </div>
            <div
              className="edit_projects_btn"
              onClick={this.props.dashboardNavigation.bind(this, "editproject")}
            >
              <div className="edit_projects_btn_container">
                <p>Edit Project</p> <i className="fas fa-edit" />
              </div>
            </div>
            <div
              className="delete_projects_btn"
              onClick={this.props.dashboardNavigation.bind(
                this,
                "deleteproject"
              )}
            >
              <div className="delete_projects_btn_container">
                <p>Delete Project</p> <i className="fas fa-trash-alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propType = {
  dashboardNavigation: PropType.func
};

const mapStateToProps = state => ({
  page: state.dashboardNavigation
});

export default connect(
  mapStateToProps,
  { dashboardNavigation }
)(Project);
