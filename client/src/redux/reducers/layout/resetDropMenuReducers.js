import { RESET_DROP_DOWN } from "../../type/layout/layoutType";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_DROP_DOWN:
      return {
        ...state,
        dropDown: action.payload
      };
    default:
      return state;
  }
}
