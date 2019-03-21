import React, { Component } from "react";
import { Element } from "react-scroll";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isLogged } from "../../validations";

//component
import LoginBtn from "./LoginBtn";
import Signup from "./SignupBtn";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Element name="ElementHome" />
        <div id="home" className="welcome">
          <h2>Welcome To My Studio!</h2>
          <h3>IT'S NICE TO MEET YOU</h3>
          <div className="btns">
            {!isLogged() && <LoginBtn />}
            <p />
            {!isLogged() && <Signup />}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Home);
