import { DASHBOARD_NAVIGATE } from "../../../type/layout/layoutType";

const initialState = {
  // page: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_NAVIGATE:
      return {
        [action.payload]: action.payload
      };

    default:
      return state;
  }
}
