import React, { Component } from "react";
import PropTypes from "prop-types";

const DropDownMenu = ({ logout }) => {
  return (
    <div className="drop_down_menu">
      <div className="triangle" />
      <ul>
        <li>
          <i className="fas fa-sliders-h" />
          <p>Dashboard</p>
        </li>
        <li>
          <i className="fas fa-user-cog" />
          <p>Profile setings</p>
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
