import React, { Component } from "react";
import { connect } from "react-redux";

// component
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import DeleteProfile from "./profile/DeleteProfile";
import Project from "./project/Project";

class DashboardContent extends Component {
  render() {
    return (
      <div className="dashboard_content">
        <div className="dashboard_content_header">
          <p>Dashboard</p>
        </div>
        {/* profile */}
        {this.props.page && this.props.page.profile && <Profile />}
        {this.props.page && this.props.page.editprofile && <EditProfile />}
        {this.props.page && this.props.page.deleteprofile && <DeleteProfile />}

        {/* project */}
        {this.props.page && this.props.page.project && <Project />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.dashboardNavigation
});

export default connect(
  mapStateToProps,
  null
)(DashboardContent);
