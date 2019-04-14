import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// redux component
import {
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} from "../../../../redux/actions/projects/projectsActions";

class EditProject extends Component {
  constructor() {
    super();

    this.state = {
      name: "Pig Game",
      title: "This is simple javascript game",
      category: "javascript",
      description: "Nemoj da si ne vaspitan"
    };
  }

  componentDidMount() {
    const id = "5ca64f0291b2be29f408e620";
    const project = {
      name: this.state.name,
      title: this.state.title,
      catergory: this.state.category,
      description: this.state.description
    };
    // this.props.getAllProjects();
    // this.props.getProjectById(id);
    // this.props.updateProject(id, project);
    this.props.deleteProject(id);
  }

  render() {
    return <div>Edit Projects</div>;
  }
}

EditProject.propTypes = {
  getAllProjects: PropTypes.func,
  getProjectById: PropTypes.func,
  updateProject: PropTypes.func,
  deleteProject: PropTypes.func
};

export default connect(
  null,
  { getAllProjects, getProjectById, updateProject, deleteProject }
)(EditProject);
