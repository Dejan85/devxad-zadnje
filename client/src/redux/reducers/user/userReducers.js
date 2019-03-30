import { USER_DELETED, USER_UPDATE } from "../../type/user/userType";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_DELETED:
      return {
        ...state,
        user: action.payload
      };

    case USER_UPDATE:
      return {
        ...state,
        message: action.payload
      };

    default:
      return state;
  }
}
