import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Element } from "react-scroll";

// methods
import { setDropDownMenu } from "../../../redux/actions/layout/layoutActions";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: {
        cols: 7,
        value: "Message"
      },
      ElementContact: {
        classNameH1: "fadeIn opacity",

        classNameSpan: "fadeInLeftBig opacity",
        classNameH2: "fadeInLeftBig opacity",
        classNameP: "fadeInLeftBig opacity",
        classNameButton: "fadeInLeftBig opacity",
        classNameImg: "fadeInRightBig opacity",

        classNameMobile: "mobile fadeInDownBig opacity",
        classNameViber: "viber fadeInUpBig opacity",
        classNameEmail: "email fadeInLeftBig opacity",
        classNameInput1: "fadeInLeftBig opacity",
        classNameInput2: "fadeInRightBig opacity",
        classNameInput3: "fadeInUpBig opacity",
        classNameInput4: "fadeInDownBig opacity",
        classNameContactFormContent: "contact_form_content fadeIn opacity",
        opacity: { opacity: 1 }
      }
    };
  }

  render() {
    return (
      <div className="contact" onClick={this.props.setDropDownMenu}>
        <Element name="ElementContact" />

        <div className="contact_container">
          <h1>CONTACT ME</h1>
          {/* personal contact */}
          <div className="personal_contact">
            <div className="mobile">
              <div className="mobile_circle">
                <i className="fas fa-mobile-alt" />
              </div>
              <p>069 / 19-07-978</p>
            </div>
            <div className="viber">
              <div className="viber_circle">
                <i className="fab fa-viber" />
              </div>
              <p>069 / 19-07-978</p>
            </div>
            <div className="email">
              <div className="email_circle">
                <i className="fas fa-envelope-square" />
              </div>
              <p>xypnotica@gmail.com</p>
            </div>
          </div>

          {/* contact form */}
          <div className="contact_form">
            <div className="contact_form_content">
              <h2>DON`T BE SHY. SAY HELLO!</h2>
              <p>
                Accusantium quam, aliquam ultricies eget tempor id, aliquam eget
                nibh et. Maecen aliquam, risus at semper. Accusantium quam,
                aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen
                aliquam, risus at semper. Accusantium quam, aliquam ultricies
                eget tempor id, aliquam eget nibh et. Maecen aliquampor id.
              </p>
            </div>
            {/* FORM */}

            <div className="form">
              <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea
                  rows={this.state.textarea.cols}
                  value={this.state.textarea.value}
                  readOnly
                />
                <button>Send Message</button>
              </form>
            </div>
            {/* <div className="social_link">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-linkedin-in" />
              <i className="fab fa-google-plus-g" />
            </div> */}
          </div>
        </div>
        <footer>
          <h5>© Devxad Project</h5>
          <p>
            Made By <span>Dejan Markovic</span>
          </p>
        </footer>
      </div>
    );
  }
}

Contact.propTypes = {
  page: PropTypes.string,
  setDropDownMenu: PropTypes.func
};

const mapStateToProps = state => ({
  page: state.animate.pagename
});

export default connect(
  mapStateToProps,
  { setDropDownMenu }
)(Contact);
