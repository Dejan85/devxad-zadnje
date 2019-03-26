import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// redux actions
import { dashboardNavigation } from "../../../redux/actions/layout/layoutActions";

const DashboardDropMenu = ({ li, dashboardNavigation }) => {
  const handleNav = e => {
    dashboardNavigation(e.target.textContent);
  };

  return (
    <ul>
      {li.map((item, index) => {
        return (
          <li onClick={handleNav} key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

DashboardDropMenu.propTypes = {
  dashboardNavigation: PropTypes.func
};

export default connect(
  null,
  { dashboardNavigation }
)(DashboardDropMenu);
