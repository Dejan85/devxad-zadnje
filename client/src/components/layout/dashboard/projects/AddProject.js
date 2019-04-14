import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// redux methods
import { createProject } from "../../../../redux/actions/projects/projectsActions";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      image: [],
      name: "",
      title: "",
      category: "",
      description: ""
    };

    this.projectsData = new FormData();
  }

  onChange = e => {
    let arr;
    if (e.target.name === "image") {
      arr = [...this.state.image, e.target.files[0]];
    }
    const value = e.target.name === "image" ? arr : e.target.value;

    this.setState({
      [e.target.name]: value
    });

    console.log(this.state);
    this.projectsData.append(e.target.name, value);
  };

  descriptionHandleChange = value => {
    this.setState({ description: value });
  };

  onSubmit = e => {
    e.preventDefault();
    // const project = {
    //   name: this.state.name,
    //   title: this.state.title,
    //   category: this.state.category,
    //   description: this.state.description
    // };
    this.props.createProject(this.projectsData);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="add_project">
          <div className="add_project_container fadeInRightBig">
            {/* photo */}
            <div className="add_project_photo">
              <h2>Project Photo</h2>

              <div className="add_project_photo_holder">
                {/* start adding photo */}
                {(!this.state.image.length && (
                  <div className="start_adding_photo">
                    <i className="fas fa-plus" />
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      value={this.state.image}
                      onChange={this.onChange}
                    />
                  </div>
                )) || (
                  <>
                    {this.state.image.map((item, index) => {
                      return (
                        <div key={index} className="add_project_photo_border">
                          <div className="add_project_photo_input_holder">
                            <i className="fas fa-images" />
                            {/* <img></img> */}
                          </div>
                        </div>
                      );
                    })}

                    <div className="add_project_photo_border">
                      <div className="add_project_photo_add_another_photo">
                        <i className="fas fa-plus" />
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* general info */}
            <div className="add_project_general_info">
              <h2>General Info</h2>
              <div className="add_project_general_info_border">
                <div className="add_project_input_holder">
                  <label>Project Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="add_project_input_holder">
                  <label>Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="add_project_input_holder">
                  <div className="add_project_input_holder_select">
                    <label>Category</label>
                    <select
                      value={this.state.category}
                      onChange={this.onChange}
                      name="category"
                    >
                      <option className="option" value="html">
                        HTML/CSS
                      </option>
                      <option className="option" value="javascript">
                        Javascript
                      </option>
                      <option className="option" value="react">
                        React
                      </option>
                      <option className="option" value="node">
                        Node
                      </option>
                      <option className="option" value="fullstack">
                        Fullstack
                      </option>
                    </select>
                  </div>
                </div>
                <div className="add_project_input_holder">
                  <label />
                  <input
                    type="password"
                    name="password"
                    style={{ opacity: 0 }}
                  />
                </div>
                {/* <div className="add_project_button_holder">
                  <button type="submit">Submit</button>
                </div> */}
              </div>
            </div>

            {/* description */}
            <div className="project_description">
              <h2>Project Description</h2>
              <ReactQuill
                value={this.state.description}
                onChange={this.descriptionHandleChange}
                theme="snow"
                modules={AddProject.modules}
                formats={AddProject.formats}
                style={{ height: "505px" }}
              />
            </div>

            <div className="add_project_button_holder">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func
};

AddProject.modules = {
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

AddProject.formats = [
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

export default connect(
  null,
  { createProject }
)(AddProject);
