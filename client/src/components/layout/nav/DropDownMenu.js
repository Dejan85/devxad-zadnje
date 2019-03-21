import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DropDownMenu = ({ logout }) => {
  return (
    <div className="drop_down_menu">
      <div className="triangle" />
      <ul>
        <li>
          <i className="fas fa-user-cog" />
          <Link to="/dashboard">
            <p>Profile setings</p>
          </Link>
        </li>
        <li>
          <i className="fas fa-sliders-h" />
          <p>Dashboard</p>
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
  logout: PropTypes.func
};

export default DropDownMenu;
