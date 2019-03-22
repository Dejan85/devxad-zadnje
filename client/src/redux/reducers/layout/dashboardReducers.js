import { DASHBOARD_RESET_DROP_MENU } from "../../type/layout/layoutType";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_RESET_DROP_MENU:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };

    default:
      return state;
  }
}
