import React, { Component } from "react";
import { connect } from "react-redux";

class Project extends Component {
  render() {
    return <div>Project</div>;
  }
}

const mapStateToProps = state => ({
  page: state.dashboardNavigation
});

export default connect(
  mapStateToProps,
  null
)(Project);
