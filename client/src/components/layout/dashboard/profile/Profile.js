import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

// redux action
import { dashboardNavigation } from "../../../../redux/actions/layout/layoutActions";

class Profile extends Component {
  handleNav = e => {
    this.props.dashboardNavigation(e.target.textContent);
  };
  render() {
    return (
      <div className="profile">
        <div className="profile_container fadeInRightBig">
          <div className="menu_container">
            <div />
            <div />
            <div />
            <div className="edit_profile_btn" onClick={this.handleNav}>
              <div className="edit_profile_btn_container">
                <p>Edit Profile</p> <i className="fas fa-plus" />
              </div>
            </div>
            <div className="delete_profile_btn" onClick={this.handleNav}>
              <div className="delete_profile_btn_container">
                <p>Delete Profile</p> <i className="fas fa-trash-alt" />
              </div>
            </div>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

Profile.propType = {
  dashboardNavigation: PropType.func
};

const mapStateToProps = state => ({
  page: state.dashboardNavigation
});

export default connect(
  mapStateToProps,
  { dashboardNavigation }
)(Profile);
