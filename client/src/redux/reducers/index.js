import { combineReducers } from "redux";
// layout reducers
import animationsReducers from "./layout/animationsReducers";
import resetDropMenuReducers from "./layout/resetDropMenuReducers";
import dashboardReducers from "./layout/dashboardReducers";

// admin reducers
import adminRouteReducers from "./admin/adminRouteReducers";
// auth reducers
import authReducers from "./auth/authReducers";

// combine all reducers
export default combineReducers({
  // layout reducers
  animate: animationsReducers,
  dropMenu: resetDropMenuReducers,
  dashboardDropMenu: dashboardReducers,
  // admin reducers
  route: adminRouteReducers,
  // auth reducers
  auth: authReducers
});
