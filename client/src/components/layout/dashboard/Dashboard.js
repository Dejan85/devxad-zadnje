import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// component
import DashboardNav from "./DashboardNav";
import DashboardContent from "./DashboardContent";

// validation
// import { isLogged } from "../../validations/index";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard_container fadeInRightBig">
          <div className="dashboard_nav_bar ">
            <div className="dashboard_nav_bar_header">
              <i className="fas fa-tachometer-alt" />
              Dashboard
            </div>
            <DashboardNav
              li={[["Edit Account", "Delete Account"]]}
              nav={"Account"}
            />
            <DashboardNav
              li={[["Add Project", "Edit Project", "Delete Project"]]}
              nav={"Project"}
            />
            }
          </div>
          <DashboardContent />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dropMenu: PropTypes.object
};

const mapStateToProps = state => ({
  dropMenu: state.dashboardDropMenu
});

export default connect(mapStateToProps)(Dashboard);
