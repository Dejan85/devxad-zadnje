import React from "react";

const DashboardNav = props => {
  const { nav, menu, active } = props;
  return (
    <div className="dashboard_nav">
      {nav}
      {active.profile && menu.profile}
      {active.projects && menu.projects}
    </div>
  );
};

export default DashboardNav;
