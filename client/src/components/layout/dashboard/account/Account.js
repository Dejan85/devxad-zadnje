import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

// redux action
import { dashboardNavigation } from "../../../../redux/actions/layout/layoutActions";

class Account extends Component {
  render() {
    return (
      <div className="account">
        <div className="account_container fadeInRightBig">
          <div className="menu_container">
            <div
              className="edit_account_btn"
              onClick={this.props.dashboardNavigation.bind(this, "editaccount")}
            >
              <div className="edit_account_btn_container">
                <p>Edit Account</p>
                <i className="fas fa-user-circle" />
              </div>
            </div>
            <div
              className="delete_account_btn"
              onClick={this.props.dashboardNavigation.bind(
                this,
                "deleteaccount"
              )}
            >
              <div className="delete_account_btn_container">
                <p>Delete Account</p> <i className="fas fa-user-alt-slash" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Account.propType = {
  dashboardNavigation: PropType.func
};

const mapStateToProps = state => ({
  page: state.dashboardNavigation
});

export default connect(
  mapStateToProps,
  { dashboardNavigation }
)(Account);
