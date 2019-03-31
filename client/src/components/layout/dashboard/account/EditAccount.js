import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// redux method
import { updateUser } from "../../../../redux/actions/user/userActions";

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

  onChange = e => {
    const value =
      e.target.name === "photo" ? e.target.files[0] : e.target.value;
    // const fileSize = e.target.name === "photo" ? e.target.files[0].size : 0;

    this.userData.set(e.target.name, value);
    this.setState({
      [e.target.name]: value
      // fileSize
      // photoUrl: `/user/photo/${this.props.auth.id}?${new Date().getTime()}`
    });

    this.props.updateUser(null, null, true);

    e.target.name === "photo" &&
      this.props.updateUser(this.userData, this.props.auth.id, null);
  };

  onSubmit = e => {
    e.preventDefault();
    // this is for reset redux for user message
    this.props.updateUser(null, null, null);

    // now we update user for real
    this.props.updateUser(this.userData, this.props.auth.id, null);
  };

  componentDidMount() {
    this.userData = new FormData();

    // this is for reset redux for user message
    this.props.updateUser(null, null, true);

    this.setState({
      name: this.props.auth.name,
      lastname: this.props.auth.lastname,
      email: this.props.auth.email,
      photoUrl: `/user/photo/${this.props.auth.id}?${new Date().getTime()}`
    });
  }

  render() {
    const photo = `/user/photo/${this.props.auth.id}?${new Date().getTime()}`;
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
                  {/* {(this.props.message && this.state.photoUrl && (
                    <img src={this.state.photoUrl} alt={""} />
                  )) ||
                    (!this.props.message && <div>Waiting for submit...</div>)} */}

                  {this.props.message && (
                    <img
                      src={`/user/photo/${
                        this.props.auth.id
                      }?${new Date().getTime()}`}
                      alt={""}
                    />
                  )}

                  {/* <img src={photo} alt={""} /> */}
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
  updateUser: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const mapStateToProps = state => ({
  auth: state.auth.user.user,
  message: state.user.message
});

export default connect(
  mapStateToProps,
  { updateUser }
)(EditAccount);
