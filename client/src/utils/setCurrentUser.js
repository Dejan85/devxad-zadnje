import { SIGNIN } from "../redux/type/auth/authTypes";

export const setCurrentUser = decoded => {
  return {
    type: SIGNIN,
    payload: decoded
  };
};
