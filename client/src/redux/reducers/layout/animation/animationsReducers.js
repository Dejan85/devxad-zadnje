import { ANIMATE } from "../../../type/animationsType";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ANIMATE:
      return {
        ...state,
        pagename: action.payload
      };

    default:
      return state;
  }
}
