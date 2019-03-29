import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//redux methods
import { dashboardNavigation } from "../../../redux/actions/layout/layoutActions";

const DropDownMenu = ({ logout, dashboardNavigation }) => {
  return (
    <div className="drop_down_menu flipInY">
      <div className="triangle" />
      <ul>
        <li>
          <i className="fas fa-user-cog" />
          <Link
            to="/dashboard"
            onClick={dashboardNavigation.bind(this, "profile")}
          >
            <p>Account</p>
          </Link>
        </li>

        <li>
          {/* <i className="fas fa-user-cog" /> */}
          <i className="fas fa-project-diagram" />
          <Link
            to="/dashboard"
            onClick={dashboardNavigation.bind(this, "project")}
          >
            <p>Project</p>
          </Link>
        </li>

        <li>
          <i className="fas fa-sliders-h" />
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
        </li>

        <li onClick={logout}>
          <i className="fas fa-sign-out-alt" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

DropDownMenu.propTypes = {
  logout: PropTypes.func,
  dashboardNavigation: PropTypes.func
};

export default connect(
  null,
  { dashboardNavigation }
)(DropDownMenu);
