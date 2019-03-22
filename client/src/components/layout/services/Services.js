import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Element } from "react-scroll";

// methods
import { setDropDownMenu } from "../../../redux/actions/layout/layoutActions";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ElementServices: {
        classname: "circle zoomIn opacity",
        classNameH1: "fadeInLeftBig opacity",
        classNameP: "fadeInUpBig opacity",
        classNameSpan: "fadeInUpBig opacity"
      }
    };
  }

  render() {
    return (
      <div className="services" onClick={this.props.setDropDownMenu}>
        <Element name="ElementServices" />

        <h1>SERVICES</h1>
        <div className="services_box">
          <div className="circle">
            <i className="fab fa-html5" />
          </div>
          <p>Static Web Page</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit
          </span>
        </div>

        <div id="services" className="services_box">
          <div className="circle">
            <i className="fab fa-react" />
          </div>
          <p>Web Application</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit
          </span>
        </div>
        <div className="services_box">
          <div className="circle">
            <i className="fab fa-node-js" />
          </div>
          <p>Full Stack Application</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit
          </span>
        </div>
      </div>
    );
  }
}

Services.propTypes = {
  page: PropTypes.string,
  setDropDownMenu: PropTypes.func
};

const mapStateToProps = state => ({
  page: state.animate.pagename
});

export default connect(
  mapStateToProps,
  { setDropDownMenu }
)(Services);
