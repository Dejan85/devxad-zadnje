import { combineReducers } from "redux";
//
// ─── LAYOUT REDUCERS ────────────────────────────────────────────────────────────
//

import animationsReducers from "./layout/animation/animationsReducers";
import resetDropMenuReducers from "./layout/nav/resetDropMenuReducers";
import dashboardReducers from "./layout/dashboard/dashboardReducers";

//
// ─── AUTH REDUCERS ──────────────────────────────────────────────────────────────
//

import authReducers from "./auth/authReducers";

//
// ─── ACCOUNT REDUCERS ──────────────────────────────────────────────────────────────
//

import accountReducers from "./account/accountReducers";

//
// ─── COMBINE ALL REDUCERS ───────────────────────────────────────────────────────
//

export default combineReducers({
  // layout reducers
  animate: animationsReducers,
  dropMenu: resetDropMenuReducers,
  dashboardNavigation: dashboardReducers,
  // auth reducers
  auth: authReducers,
  // account reducers
  account: accountReducers
});
