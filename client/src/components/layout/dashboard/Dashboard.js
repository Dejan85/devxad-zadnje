import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// component
import DashboardNav from "./DashboardNav";
import DashboardDropMenu from "./DashboardDropMenu";

// methods
import { dashboardDropMenu } from "../../../redux/actions/layout/layoutActions";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      nav: [
        <nav onClick={this.handleMenu}>
          <i className="fas fa-user" />
          Profile
          <i className="fas fa-angle-left arow" />
        </nav>,
        <nav onClick={this.handleMenu}>
          <i className="fas fa-project-diagram" />
          Projects
          <i className="fas fa-angle-left arow" />
        </nav>
      ],
      li: [
        {
          profile: <DashboardDropMenu li={["Edit Profile", "Delete Profile"]} />
        },
        {
          projects: (
            <DashboardDropMenu
              li={["Add Project", "Edit Project", "Delete Project"]}
            />
          )
        }
      ]
    };
  }

  handleMenu = e => {
    const name = e.target.textContent.toLowerCase();
    this.props.dashboardDropMenu(name);
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard_container fadeInRightBig">
          <div className="dashboard_nav_bar">
            <div className="dashboard_nav_bar_header">
              <i className="fas fa-tachometer-alt" />
              Dashboard
            </div>
            {this.state.nav.map((item, index) => {
              return (
                <DashboardNav
                  key={index}
                  nav={item}
                  menu={this.state.li[index]}
                  active={this.props.dropMenu}
                />
              );
            })}
          </div>
          <div className="dashboard_content">
            <div className="dashboard_content_header">
              <p>Dashboard</p>
            </div>
          </div>
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

export default connect(
  mapStateToProps,
  { dashboardDropMenu }
)(Dashboard);
