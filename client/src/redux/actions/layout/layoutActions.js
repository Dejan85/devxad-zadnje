import { ANIMATE } from "../../type/animationsType";
import {
  RESET_DROP_DOWN,
  DASHBOARD_RESET_DROP_MENU
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
export const dashboardDropMenu = name => dispatch => {
  dispatch({
    type: DASHBOARD_RESET_DROP_MENU,
    payload: name
  });
};
