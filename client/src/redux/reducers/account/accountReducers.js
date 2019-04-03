import {
  ACCOUNT_DELETED,
  ACCOUNT_UPDATE
} from "../../type/account/accountType";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_DELETED:
      return {
        ...state,
        account: action.payload
      };

    case ACCOUNT_UPDATE:
      return {
        ...state,
        message: action.payload
      };

    default:
      return state;
  }
}
