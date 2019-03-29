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
      fileSize: ""
    };
  }

  onChange = e => {
    const value =
      e.target.name === "photo" ? e.target.files[0] : e.target.value;
    const fileSize = e.target.name === "photo" ? e.target.files[0].size : 0;

    this.userData.set(e.target.name, value);
    this.setState({
      [e.target.name]: value,
      fileSize
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.updateUser(this.userData, this.props.user.id);
  };

  componentDidMount() {
    this.userData = new FormData();

    this.setState({
      name: this.props.user.name,
      lastname: this.props.user.lastname,
      email: this.props.user.email
    });
  }

  render() {
    const id = this.props.user.id;
    const photoUrl = `http://localhost:5000/user/photo/${id}`;

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
                  <img src={photoUrl} alt={""} />
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
  user: PropTypes.object,
  updateUser: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { updateUser }
)(EditAccount);
