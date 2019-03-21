import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

// methods
import { userLogin } from "../../redux/actions/auth/authActions";

// component
import ErrorHandle from "./ErrorHandle";

class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      resetError: false,
      redirect: false,
      message: {
        error: undefined
      }
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      resetError: true
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.userLogin(user);
  };

  // ovo nam sluzi da bi resetovali message kada krenemo da kucamo ponovo nesto u inpute
  componentWillReceiveProps(props) {
    if (props.user.message) {
      const message = {
        ...this.state.message,
        message: props.user.message
      };
      this.setState({
        resetError: false,
        message
      });
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 500);
    }

    if (props.user.error) {
      const message = { ...this.state.message, error: props.user.error };
      this.setState({
        resetError: false,
        message
      });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup_signin">
        <form onSubmit={this.onSubmit}>
          <div className="signup_signin_container fadeInRightBig">
            <div className="signup_signin_form">
              <div className="signup_signin_input_holder">
                <h2>Login</h2>
                <ErrorHandle
                  message={this.state.message}
                  reset={this.state.resetError}
                />
                <label>Email:</label>
                <input type="email" name="email" onChange={this.onChange} />
              </div>
              <div className="signup_signin_input_holder">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.onChange}
                />
              </div>
              <div className="signup_signin_input_holder">
                <div />
                <button type="submit">Signup</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Signin.propTypes = {
  userLogin: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(
  mapStateToProps,
  { userLogin }
)(Signin);
