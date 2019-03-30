import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

// component
import Confirm from "./Confirm";

// redux method
import { deleteUser } from "../../../../redux/actions/user/userActions";
import { userLogout } from "../../../../redux/actions/auth/authActions";

class DeleteAccount extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      lastname: "",
      email: "",
      photoUrl: "",
      confirm: false,
      radio1: false,
      radio2: false,
      inputEmailConfirm: "",
      redirect: false
    };
  }

  componentDidMount() {
    const { id, name, lastname, email, image } = this.props.user;

    if (id) {
      this.setState({ name, lastname, email, photoUrl: image });
    }
  }

  confirmForDelete = () => {
    this.setState({
      confirm: !this.state.confirm
    });
  };

  cancel = () => {
    this.setState({
      confirm: !this.state.confirm,
      radio1: false,
      radio2: false,
      inputEmailConfirm: ""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  confirmDeletingAcc = e => {
    const confirm = {
      answer1: this.state.radio1,
      answer2: this.state.radio2,
      inputEmailConfirm: this.state.inputEmailConfirm
    };

    confirm.answer1 &&
      confirm.answer2 &&
      confirm.inputEmailConfirm &&
      confirm.inputEmailConfirm === this.props.user.email &&
      this.props.userLogout() &&
      this.props.deleteUser(this.props.user.id) &&
      this.setState({
        redirect: true
      });
  };

  render() {
    // this.props.userMessage && console.log(this.props.userMessage.user.message);
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="edit_account">
        <div className="edit_account_container fadeInRightBig">
          {/* {this.props.userMessage && (
            <div>{this.props.userMessage.user.message}</div>
          )} */}

          <div className="delete_account_general_info">
            <h2>Delete Account </h2>
            <div className="edit_account_general_info_border">
              <div className="delete_account_input_holder">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder={this.state.name}
                  disabled
                />
              </div>
              <div className="delete_account_input_holder">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder={this.state.lastname}
                  disabled
                />
              </div>
              <div className="delete_account_input_holder">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder={this.state.email}
                  disabled
                />
              </div>
              <div
                className="delete_account_input_holder"
                style={{ opacity: 0 }}
              >
                <label>{""}</label>
                <input type="password" name="password" />
              </div>
              <div className="delete_account_button_holder">
                <button onClick={this.confirmForDelete}>Delete</button>
              </div>
            </div>
          </div>
          {this.state.confirm && (
            <Confirm
              cancel={this.cancel}
              confirmDeletingAcc={this.confirmDeletingAcc}
              onChange={this.onChange}
              inputEmailConfirm={this.state.inputEmailConfirm}
            />
          )}
          <div className="delete_account_photo">
            <h2>Account Photo</h2>
            <div className="edit_account_photo_border">
              <div className="delete_account_photo_input_holder">
                <i className="fas fa-images" />
                {this.state.photoUrl && (
                  <img src={this.state.photoUrl} alt={"There is no image"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeleteAccount.propTypes = {
  user: PropTypes.object,
  deleteUser: PropTypes.func,
  userMessage: PropTypes.object,
  userLogout: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.auth.user.user,
  userMessage: state.user
});

export default connect(
  mapStateToProps,
  { deleteUser, userLogout }
)(DeleteAccount);
