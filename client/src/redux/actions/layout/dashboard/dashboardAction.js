// dashboard menu
export const dashboardNavigation = name => dispatch => {
  // remove white space between words and kill caps lock
  const noCapsName = () => {
    function callBack(name) {
      return name.replace(/ +/g, "");
    }
    return callBack(name.toLowerCase());
  };

  dispatch({
    type: DASHBOARD_NAVIGATE,
    payload: noCapsName()
  });
};
