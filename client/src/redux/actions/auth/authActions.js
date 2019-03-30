import { SIGNUP, LOGOUT } from "../../type/auth/authTypes";
import { decodeToken } from "../../../utils/decodeToken";
import { setCurrentUser } from "../../../utils/setCurrentUser";

//
// ─── USER REGISTRATION ──────────────────────────────────────────────────────────
//

export const signup = (reset, user) => dispatch => {
  if (!reset) {
    return fetch("/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        res.json().then(message => {
          dispatch({
            type: SIGNUP,
            payload: message
          });
        });
      })
      .catch(err => {
        console.log("Somthing is wrong with sighnup " + err);
      });
  } else {
    //   ovo nam sluzi da bi resetovali message iz reduxa
    dispatch({
      type: SIGNUP,
      payload: {}
    });
  }
};

//
// ─── USER LOGIN ─────────────────────────────────────────────────────────────────
//

export const userLogin = user => dispatch => {
  return fetch("/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      res.json().then(data => {
        data.token && localStorage.setItem("jwt", JSON.stringify(data.token));
        const user = decodeToken();

        const msg = {
          error: data.error,
          message: data.message,
          user
        };

        dispatch(setCurrentUser(msg));
      });
    })
    .catch(err => {
      console.log("Somthin is wrong with login " + err);
    });
};

//
// ─── USER LOGOUT ────────────────────────────────────────────────────────────────
//

export const userLogout = () => dispatch => {
  return fetch("/logout", {
    method: "GET"
  })
    .then(res => {
      localStorage.removeItem("jwt");
      return res.json().then(msg => {
        dispatch({
          type: LOGOUT,
          payload: msg
        });
      });
    })
    .catch(err => {
      console.log("Somthin is wrong with logout " + err);
    });
};
