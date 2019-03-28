import { combineReducers } from "redux";
// layout reducers
import animationsReducers from "./layout/animation/animationsReducers";
import resetDropMenuReducers from "./layout/nav/resetDropMenuReducers";
import dashboardReducers from "./layout/dashboard/dashboardReducers";

// admin reducers
import adminRouteReducers from "./admin/adminRouteReducers";
// auth reducers
import authReducers from "./auth/authReducers";
// user reducers
import userReducers from "./user/userReducers";

// combine all reducers
export default combineReducers({
  // layout reducers
  animate: animationsReducers,
  dropMenu: resetDropMenuReducers,
  dashboardNavigation: dashboardReducers,
  // admin reducers
  route: adminRouteReducers,
  // auth reducers
  auth: authReducers,
  // user reducers
  user: userReducers
});
