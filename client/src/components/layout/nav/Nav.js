import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { animations } from "../../../redux/actions/layout/layoutActions";
import { userLogout } from "../../../redux/actions/auth/authActions";
import { isLogged } from "../../validations";

// component
import DropDownMenu from "../nav/DropDownMenu";

// methods
import { setDropDownMenu } from "../../../redux/actions/layout/layoutActions";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      dropMenu: false,
      arowUp: "fas fa-angle-up",
      arowDwon: " fas fa-angle-down",
      user: {}
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleSetActive = to => {
    this.props.animations(to);
    this.props.setDropDownMenu(); // this is for reset drop down menu from navigation
  };

  // drop menu
  dropMenu = () => {
    this.setState({
      dropMenu: !this.state.dropMenu
    });
  };

  // get user info from redux
  componentDidMount() {
    if (!this.props.user) {
      return null;
    } else if (this.props.user.user) {
      this.setState({
        user: this.props.user.user
      });
    } else if (this.props.user) {
      this.setState({
        user: this.props.user
      });
    }
  }

  //  reset drop down menu
  componentWillReceiveProps(props) {
    if (props.dropMenu) {
      this.setState({
        dropMenu: props.dropMenu.dropDown
      });
    }
  }

  render() {
    return (
      <div className="nav_container">
        <div className="flex_nav_container">
          <div className="logo">
            <h1 className="logo" onClick={this.scrollToTop}>
              D<span>evxad</span>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="ElementHome"
                  spy={true}
                  smooth={"true"}
                  offset={-400}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ElementServices"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  // offset={0}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ElementWork"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ElementPortfolio"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ElementAbout"
                  spy={true}
                  smooth={true}
                  // offset={-160}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ElementContact"
                  spy={true}
                  smooth={true}
                  offset={70}
                  // offset={500}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Contact
                </Link>
              </li>
              {isLogged() && (
                <li className="user" onClick={this.dropMenu}>
                  <p>
                    {this.state.user.name}
                    <i
                      className={
                        (this.state.dropMenu && this.state.arowUp) ||
                        (!this.state.dropMenu && this.state.arowDwon)
                      }
                    />
                  </p>
                  {this.state.dropMenu && (
                    <DropDownMenu logout={this.props.userLogout} />
                  )}
                  <div className="avatar" />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

//
// ─── PROP TYPES ──────────────────────────────────────────────────────────────────
//
Nav.propTypes = {
  animate: PropTypes.func,
  userLogout: PropTypes.func,
  user: PropTypes.object,
  setDropDownMenu: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.auth.user,
  dropMenu: state.dropMenu
});

export default connect(
  mapStateToProps,
  { animations, userLogout, setDropDownMenu }
)(Nav);
