import { ROUTE } from "../../type/admin/adminTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ROUTE:
      return {
        ...state,
        route: action.payload
      };

    default:
      return state;
  }
}
