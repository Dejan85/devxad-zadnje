import React, { Component } from "react";
import PropTypes from "prop-types";
import { signup } from "../../redux/actions/auth/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// component
import ErrorHandle from "./ErrorHandle";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      resetError: false,
      redirect: false
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
    const { name, lastname, email, password, confirmPassword } = this.state;
    const user = { name, lastname, email, password, confirmPassword };
    this.props.signup(null, user);
  };

  // ovo nam sluzi da bi resetovali message kada krenemo da kucamo ponovo nesto u inpute
  componentWillReceiveProps(props) {
    if (props.message.error) {
      this.setState({
        resetError: false
      });
    }

    if (props.message.message) {
      this.setState({
        resetError: false
      });
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 500);
    }
  }

  // ovo nam sluzi da bi resetovali iz reduxa message
  componentDidMount() {
    this.props.signup(true, null);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="signup_signin">
        <form onSubmit={this.onSubmit}>
          <div className="signup_signin_container fadeInRightBig">
            <div className="signup_signin_form">
              <div className="signup_signin_input_holder">
                <h2>Sign Up</h2>
                <ErrorHandle
                  message={this.props.message}
                  reset={this.state.resetError}
                />
                <label>Name:</label>
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="signup_signin_input_holder">
                <label>Lastname:</label>
                <input
                  name="lastname"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.lastname}
                />
              </div>
              <div className="signup_signin_input_holder">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              {/* <div className="signup_signin_input_holder">
                <label>Avatar:</label>
                <input
                  className="avatar"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={this.onChange}
                />
              </div> */}
              <div className="signup_signin_input_holder">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <div className="signup_signin_input_holder">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={this.onChange}
                  value={this.state.confirmPassword}
                />
              </div>

              <div className="signup_signin_input_holder">
                <div />
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func,
  message: PropTypes.object
};

const mapStateToProps = state => ({
  message: state.auth.signup
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
