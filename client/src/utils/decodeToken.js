import jwt_decode from "jwt-decode";

export const decodeToken = () => {
  // check for token
  if (localStorage.jwt) {
    const token = localStorage.getItem("jwt");
    return jwt_decode(token);
  }
};
