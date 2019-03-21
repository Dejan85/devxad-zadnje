import { ROUTE } from "../../type/admin/adminTypes";

export const adminRoutesActions = page => dispatch => {
  dispatch({
    type: ROUTE,
    payload: page
  });
};
