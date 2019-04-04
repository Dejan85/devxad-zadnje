import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      image: []
    };
  }

  onChange = e => {
    const arr = [...this.state.image, e.target.value];

    if (e.target.name === "image") {
      this.setState({
        [e.target.name]: arr
      });
    }
  };

  render() {
    console.log(this.state.image);
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
                          value={this.state.imageArr}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* photo arrat */}
              </div>
            </div>

            {/* general info */}
            <div className="add_project_general_info">
              <h2>General Info</h2>
              <div className="add_project_general_info_border">
                <div className="add_project_input_holder">
                  <label>Project Name</label>
                  <input type="text" name="projectName" />
                </div>
                <div className="add_project_input_holder">
                  <label>Project Title</label>
                  <input type="text" name="projectTile" />
                </div>
                <div className="add_project_input_holder">
                  <div className="add_project_input_holder_select">
                    <label>Category</label>
                    <select>
                      <option className="option">HTML/CSS</option>
                      <option className="option">Javascript</option>
                      <option className="option"> React</option>
                      <option className="option">Node</option>
                      <option className="option">Fullstack</option>
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
                value={this.state.text}
                onChange={this.handleChange}
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

export default AddProject;
