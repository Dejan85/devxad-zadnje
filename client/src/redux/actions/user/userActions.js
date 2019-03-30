import { USER_DELETED, USER_UPDATE } from "../../type/user/userType";

//
// ─── EDIT USER ──────────────────────────────────────────────────────────────────
//

export const updateUser = (user, id, xad) => dispatch => {
  if (xad) {
    return dispatch({
      type: USER_UPDATE,
      payload: true
    });
  }

  // this is for reset reducers message
  if (!user && !id) {
    return dispatch({
      type: USER_UPDATE,
      payload: null
    });
  }

  const token = localStorage.getItem("jwt");
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
      console.log(response);
      dispatch({
        type: USER_UPDATE,
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

export const deleteUser = id => dispatch => {
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
          type: USER_DELETED,
          payload: response
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};
