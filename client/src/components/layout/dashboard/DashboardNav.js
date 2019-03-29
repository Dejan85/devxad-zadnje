import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// components
import DashboardDropMenu from "./DashboardDropMenu";

// redux action
import { dashboardNavigation } from "../../../redux/actions/layout/layoutActions";

class DashboardNav extends Component {
  constructor() {
    super();

    this.state = {
      dropMenu: false,
      arow: false
    };
  }

  showDropMenu = () => {
    this.props.dashboardNavigation(this.props.nav);
    this.setState({
      dropMenu: !this.state.dropMenu,
      arow: !this.state.arow
    });
  };

  render() {
    return (
      <div className="dashboard_nav">
        <nav onClick={this.showDropMenu}>
          {this.props.nav}
          {!this.state.arow ? (
            <i className="fas fa-angle-left arow" />
          ) : (
            <i className="fas fa-angle-down arow" />
          )}
        </nav>

        {this.props.li.map(
          (item, index) =>
            this.state.dropMenu && <DashboardDropMenu key={index} li={item} />
        )}
      </div>
    );
  }
}

DashboardNav.propTypes = {
  dashboardNavigation: PropTypes.func
};

export default connect(
  null,
  { dashboardNavigation }
)(DashboardNav);
