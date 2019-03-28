import { USER_DELETED } from "../../type/user/userType";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_DELETED:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
