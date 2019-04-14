import {
  ACCOUNT_DELETED,
  ACCOUNT_UPDATE
} from "../../type/account/accountType";
import { decodeToken } from "../../../utils/decodeToken";
import { setCurrentUser } from "../../../utils/setCurrentUser";

//
// ─── EDIT ACCOUNT ──────────────────────────────────────────────────────────────────
//

export const updateAccount = (user, id, reset) => dispatch => {
  const token = localStorage.getItem("jwt");

  // this is for reset reducers message
  if (reset) {
    return dispatch({
      type: ACCOUNT_UPDATE,
      payload: true
    });
  }

  // this is for reset reducers message
  if (!user && !id) {
    return dispatch({
      type: ACCOUNT_UPDATE,
      payload: null
    });
  }

  return fetch(`/user/${id}`, {
    method: "PUT",
    headers: {
      Accept: "aplication/json",
      Authorization: `Bearer ${token}`
    },
    body: user
  })
    .then(res => {
      return res.json();
    })
    .then(response => {
      localStorage.setItem("jwt", response.token);
      const token = decodeToken();
      const user = {
        user: token
      };

      dispatch(setCurrentUser(user));
      dispatch({
        type: ACCOUNT_UPDATE,
        payload: response.message
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── DELETE USER ────────────────────────────────────────────────────────────────
//

export const deleteAccount = id => dispatch => {
  const token = localStorage.getItem("jwt");

  return fetch(`/user/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      localStorage.removeItem("jwt");
      return res.json().then(response => {
        dispatch({
          type: ACCOUNT_DELETED,
          payload: response
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};
