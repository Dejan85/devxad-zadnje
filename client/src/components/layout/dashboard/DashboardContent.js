import React, { Component } from "react";
import { connect } from "react-redux";

// component
import Account from "./account/Account";
import EditAccount from "./account/EditAccount";
import DeleteAccount from "./account/DeleteAccount";
// project component
import Project from "./projects/Project";
import AddProject from "./projects/AddProject";
import EditProject from "./projects/EditProject";
import DeleteProject from "./projects/DeleteProject";

class DashboardContent extends Component {
  render() {
    return (
      <div className="dashboard_content">
        <div className="dashboard_content_header">
          <p>Dashboard</p>
        </div>
        {/* account */}
        {this.props.page && this.props.page.account && <Account />}
        {this.props.page && this.props.page.editaccount && <EditAccount />}
        {this.props.page && this.props.page.deleteaccount && <DeleteAccount />}

        {/* project */}
        {this.props.page && this.props.page.project && <Project />}
        {this.props.page && this.props.page.addproject && <AddProject />}
        {this.props.page && this.props.page.editproject && <EditProject />}
        {this.props.page && this.props.page.deleteproject && <DeleteProject />}
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
