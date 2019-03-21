import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: undefined,
      text: ""
    };
  }

  goBack = () => {
    return this.props.history.goBack();
  };

  addImage = e => {
    this.setState({
      image: <img src={e.target.value} alt="slika" />
    });
  };

  handleChange = value => {
    this.setState({ text: value });
    console.log(this.state.text);
  };

  render() {
    return (
      <div className="add_page">
        <div className="add_page_container fadeInRightBig   ">
          {/* general */}
          <div className="general_info">
            <h2>General Info</h2>
            <div className="input_holder">
              <label>Project Name</label>
              <input placeholder="Name" />
            </div>
            <div className="input_holder">
              <label>Project Title</label>
              <input placeholder="Title" />
            </div>

            <div className="input_holder">
              <label>Category</label>
              <select>
                <option value="html/css">Html/Css</option>
                <option value="javascript">Javascript</option>
                <option value="react">React</option>
                <option value="node">Node</option>
                <option value="node">Fullstack</option>
              </select>
            </div>
          </div>

          {/* photo */}
          <div className="project_photo">
            <h2>Project Photo</h2>
            <div className="photo">
              <i className="fas fa-images" />
              <input type="file" onChange={this.addImage} />
              {this.state.image}
            </div>
          </div>

          {/* description */}
          <div className="project_description">
            <h2>Project Description</h2>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              theme="snow"
              modules={Add.modules}
              formats={Add.formats}
              style={{ height: "505px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Add.modules = {
  toolbar: [
    [{ header: ["1", "2", "3", "4", "5", "6"] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: ["center", "justify", "right"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};

Add.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
  "align"
];

export default withRouter(Add);
