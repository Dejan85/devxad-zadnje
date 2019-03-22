import React from "react";

const DashboardDropMenu = ({ li }) => {
  const xad = e => {
    console.log(e.target.textContent);
  };

  return (
    <ul>
      {li.map((item, index) => {
        return (
          <li onClick={xad} key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default DashboardDropMenu;
