import { ANIMATE } from "../../type/animationsType";

export const animations = page => dispatch => {
  dispatch({
    type: ANIMATE,
    payload: page
  });
};
