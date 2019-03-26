import { ANIMATE } from "../../type/animationsType";
import {
  RESET_DROP_DOWN,
  DASHBOARD_NAVIGATE
} from "../../type/layout/layoutType";

// animation
export const animations = page => dispatch => {
  dispatch({
    type: ANIMATE,
    payload: page
  });
};

// reset drop down menu
export const setDropDownMenu = () => dispatch => {
  dispatch({
    type: RESET_DROP_DOWN,
    payload: false
  });
};

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
