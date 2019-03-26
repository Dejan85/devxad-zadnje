import { GET_USER } from "../../type/user/userType";

export const updateUser = (user, id) => dispatch => {
  const token = localStorage.getItem("jwt");
  return fetch(`/user/${id}`, {
    method: "PUT",
    headers: {
      Accept: "aplication/json"
      // Authorization: `Bearer ${token}`
    },
    body: user
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};
