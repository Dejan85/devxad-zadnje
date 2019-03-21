import { combineReducers } from "redux";
// layout reducers
import animationsReducers from "./layout/animationsReducers";
import resetDropMenuReducers from "./layout/resetDropMenuReducers";
// admin reducers
import adminRouteReducers from "./admin/adminRouteReducers";
// auth reducers
import authReducers from "./auth/authReducers";

// combine all reducers
export default combineReducers({
  // layout reducers
  animate: animationsReducers,
  dropMenu: resetDropMenuReducers,
  // admin reducers
  route: adminRouteReducers,
  // auth reducers
  auth: authReducers
});
