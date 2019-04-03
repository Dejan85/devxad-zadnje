import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import loading from "../../../../images/loading.gif";
import { dashboardNavigation } from "../../../../redux/actions/layout/layoutActions";

//
// ─── REDUX METHOD ───────────────────────────────────────────────────────────────
//
import { updateAccount } from "../../../../redux/actions/account/accountActions";

class EditAccount extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      photo: "",
      fileSize: "",
      photoUrl: ""
    };
  }

  //
  // ─── ON CHANGE FOR INPUT CHANGE ─────────────────────────────────────────────────
  //

  onChange = e => {
    this.setState({
      photoUrl: e.target.value
    });
    const value =
      e.target.name === "photo" ? e.target.files[0] : e.target.value;
    // const fileSize = e.target.name === "photo" ? e.target.files[0].size : 0;

    e.target.name !== "photo" && this.userData.set(e.target.name, value);

    this.setState({
      [e.target.name]: value
      // fileSize
    });

    // ovaj ovde reset reduxa nam treba da bi on change pojavljivao se loading image
    e.target.name === "photo" && this.props.updateAccount(null, null, false);

    if (e.target.name === "photo") {
      this.photoData.set(e.target.name, value);
      this.props.updateAccount(this.photoData, this.props.auth._id, null);
    }
  };

  //
  // ─── ON SUBMIT FOR FORM SUBMIT ──────────────────────────────────────────────────
  //

  onSubmit = e => {
    e.preventDefault();
    // now we update user for real
    this.props.updateAccount(this.userData, this.props.auth._id, null);
    if (this.props.message) {
      this.props.dashboardNavigation("account");
    }
  };

  //
  // ─── CREATE FORM DATA AND RESET REDUX AND SET USER INFO TO STATE ────────────────
  //

  componentDidMount() {
    this.userData = new FormData();
    this.photoData = new FormData();

    // here we will set message to true
    this.props.updateAccount(null, null, true);

    this.setState({
      name: this.props.auth.name,
      lastname: this.props.auth.lastname,
      email: this.props.auth.email
    });
  }

  render() {
    console.log(this.state.photoUrl);
    return (
      <form onSubmit={this.onSubmit}>
        <div className="edit_account">
          <div className="edit_account_container fadeInRightBig">
            <div className="edit_account_general_info">
              <h2>General Info</h2>
              <div className="edit_account_general_info_border">
                <div className="edit_account_input_holder">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="edit_account_input_holder">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />
                </div>
                <div className="edit_account_input_holder">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="edit_account_input_holder">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="edit_account_button_holder">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>

            <div className="edit_account_photo">
              <h2>Account Photo</h2>
              <div className="edit_account_photo_border">
                <div className="edit_account_photo_input_holder">
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    value={this.state.image}
                    onChange={this.onChange}
                  />
                  <i className="fas fa-images" />

                  {(this.props.message && (
                    <img
                      src={`/user/photo/${
                        this.props.auth._id
                      }?${new Date().getTime()}`}
                      alt={""}
                    />
                  )) || <img src={loading} alt="" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

EditAccount.propTypes = {
  auth: PropTypes.object,
  updateAccount: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dashboardNavigation: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth.user.user,
  message: state.account.message
});

export default connect(
  mapStateToProps,
  { updateAccount, dashboardNavigation }
)(EditAccount);
