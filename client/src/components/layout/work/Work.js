import React, { Component } from "react";
import pigGame from "../../../images/pigGame.png";
import { connect } from "react-redux";
import { Element } from "react-scroll";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ElementWork: {
        classname: "circle zoomIn opacity",
        classNameH1: "zoomIn opacity",
        classNameH2: "fadeInLeftBig opacity",
        classNameP: "fadeInLeftBig opacity",
        classNameSpan: "zoomIn opacity",
        classNameButton: "fadeInLeftBig opacity",
        classNameImg: "fadeInRightBig opacity"
      }
    };
  }

  render() {
    return (
      <div className="work">
        <h1>LATEST WORK</h1>
        <Element name="ElementWork" />
        <div className="work_box_container">
          <div className="work_box">
            <span>Simple Javascript Game</span>
            <h2>Pig Game</h2>
            <p id="work">
              This is small javascript game This is small javascript game This
              is small javascript game. This is small javascript game This is
              small javascript game This is small javascript game. This is small
              javascript game This is small javascript game This is small
              javascript game. This is small javascript game This is small
              javascript game This is small javascript game.
            </p>
            <button>Chack It Live</button>
          </div>
          <div className="work_img">
            <img src={pigGame} alt="slika" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.animate.pagename
});

export default connect(
  mapStateToProps,
  null
)(Work);
