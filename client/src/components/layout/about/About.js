import React, { Component } from "react";
import avatar from "../../../images/avatar.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ElementAbout: {
        classnameAbout: "about opacity",
        classname: "circle zoomIn opacity",
        classNameH1: "zoomIn opacity",
        classNameH1v2: "fadeInUpBig opacity",
        classNameAboutLeftDivBox: "about_left_div_box fadeInLeftBig opacity",
        classNameAboutLeftDivBox2: "about_left_div_box_2 fadeInLeftBig opacity",
        classNameAboutRightDivBox2:
          "about_right_div_box_2 fadeInRightBig opacity",
        classNameAboutCenterDiv: "about_center_div fadeInDownBig opacity",
        classNameAboutRightDivBox: "about_right_div_box fadeInRightBig opacity",
        opacity: { opacity: 1 }
      }
    };
  }

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <Element name="ElementAbout" />
        <div className="about_left_div">
          <div className="about_left_div_box">
            <h2>I am</h2>
            <h3>Dejan Markovic</h3>
            <p>
              I'm in web programming for about a year. Before programing, I've
              been working static websites for a long time, but not
              professionaly. Since Oktober of last year, I started to learn
              javascript and since then I did not take a break.
            </p>
            <Link to="/biography"> Read Full...</Link>
          </div>

          {/* second box */}
          <div className="about_left_div_box_2">
            <h2>Javascript</h2>
            <h3>Our Humble Beginnings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>

          {/* three box */}
          <div className="about_left_div_box_2">
            <h2>Node Js / Express</h2>
            <h3>Our Humble Beginnings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>
        </div>
        <div className="about_center_div">
          <div className="about_center_div_circle_border">
            <div className="about_center_div_circle">
              <img src={avatar} alt="slika" />
            </div>
          </div>
          <div className="about_center_div_line" />

          {/* second circle */}
          <div className="about_center_div_circle_border">
            <div
              className="about_center_div_circle"
              style={{ background: "#DD4B25" }}
            >
              {/* <img src="" alt="slika" /> */}
              <i className="fab fa-html5" style={{ color: "#F7F7F7" }} />
            </div>
          </div>
          <div className="about_center_div_line" />

          {/* three circle */}
          <div className="about_center_div_circle_border">
            <div
              className="about_center_div_circle"
              //   style={{ background: "#F7DF1E" }}
              style={{ background: "#F7DF1E" }}
            >
              {/* <img src="" alt="slika" /> */}
              {/* <i className="fab fa-js-square" /> */}
              {/* <i className="fab fa-js" /> */}
              <i className="fab fa-node-js" />
              {/* <i className="fab fa-js-square" style={{ color: "black" }} /> */}
              {/* <p style={{ fontSize: "80px" }}>JS</p> */}
            </div>
          </div>
          <div className="about_center_div_line" />

          {/* four circle */}
          <div className="about_center_div_circle_border">
            <div
              className="about_center_div_circle"
              style={{ background: "black" }}
            >
              {/* <img src="" alt="slika" /> */}
              <i className="fab fa-react" style={{ color: "#61DAFB" }} />
            </div>
          </div>
          <div className="about_center_div_line" />

          {/* node js circle */}
          <div className="about_center_div_circle_border">
            <div
              className="about_center_div_circle"
              style={{ background: "#87BF00" }}
            >
              {/* <img src="" alt="slika" /> */}
              <i className="fab fa-node" />
            </div>
          </div>
          <div className="about_center_div_line" />

          {/* six circle */}
          <div className="about_center_div_circle_border">
            <div
              className="about_center_div_circle"
              style={{ background: "#3F2E1E" }}
            >
              {/* <img src="" alt="slika" /> */}
              <i className="fas fa-database" style={{ color: "#85BC61" }} />
            </div>
          </div>
          <div className="about_center_div_line" />

          {/* last one circle */}
          <div className="about_center_div_circle_border">
            <div className="about_center_div_circle">
              {/* <img src={mern} alt="slika" /> */}
              {/* <p>Be Part Of Our Story!</p> */}
              <p>
                <Link to="/biography">Read My Full Biography</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="about_right_div">
          <div className="about_right_div_box">
            <h2>HTML / CSS</h2>
            <h3>Our Humble Beginnings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>

          {/* second box */}
          <div className="about_right_div_box_2">
            <h2>React / Redux</h2>
            <h3>Our Humble Beginnings</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>

          {/* Three box */}
          <div className="about_right_div_box_2">
            <h2>Mongo Db / Mongoose</h2>
            <h3>Our Humble Beginnings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  page: PropTypes.string
};

const mapStateToProps = state => ({
  page: state.animate.pagename
});

export default connect(
  mapStateToProps,
  null
)(About);
