import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupBtn extends Component {
  render() {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default SignupBtn;
