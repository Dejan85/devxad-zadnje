import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// component
import ProjectNav from "./project/ProjectNav";
import Index from "./project/Index";
import Project from "./project/Project";
import Add from "../admin/project/Add";

// redux
import { adminRoutesActions } from "../../redux/actions/admin/adminRouteActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectNav: false,
      arow: true,
      route: {
        project: <Project />,
        add: <Add />,
        edit: "edit",
        delete: "delete"
      }
    };
  }

  handleProjectMenu = () => {
    this.setState({
      projectNav: !this.state.projectNav,
      arow: !this.state.arow
    });
    this.props.adminRoutesActions("project");
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard_container fadeInRightBig">
          {/* <div className="dashboard_nav">
          <h1>Admin</h1>
        </div> */}
          <div className="dashboard_left_side_nav">
            <div className="dashboard_header">
              <i className="fas fa-tachometer-alt" />
              Dashboard
            </div>
            <ul onClick={this.handleProjectMenu}>
              <li>
                <p>
                  <i className="fas fa-project-diagram" /> Project
                </p>
                <span>
                  {this.state.arow ? (
                    <i className="fas fa-angle-left" />
                  ) : (
                    <i className="fas fa-angle-down" />
                  )}
                </span>
              </li>
            </ul>
            {this.state.projectNav && <ProjectNav />}
          </div>

          {/* right side div */}
          <div className="dashboard_content">
            <div className="dashboard_content_nav">
              <p>Dashboard</p>
            </div>
            {/* <Project /> */}
            {this.state.route[this.props.route] || <Index />}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  route: PropTypes.string
};

const mapStateToProps = state => ({
  route: state.route.route
});

export default connect(
  mapStateToProps,
  { adminRoutesActions }
)(Dashboard);
