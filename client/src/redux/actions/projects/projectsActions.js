import { PROJECT_CREATE } from "../../type/project/projectsType";

//
// ─── CREATE PROJECTS ────────────────────────────────────────────────────────────
//

export const createProject = (project, id) => dispatch => {
  return fetch(`/projects/create/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    // body: JSON.stringify(project)
    body: project
  })
    .then(res => {
      return res.json().then((result, err) => {
        console.log(result);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ALL PROJECTS ───────────────────────────────────────────────────────────
//

export const getAllProjects = () => dispatch => {
  fetch("/projects/get", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json().then((result, err) => {
        console.log(result);
        console.log(err);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ONE PROJECT BY ID ──────────────────────────────────────────────────────
//

export const getProjectById = id => dispatch => {
  fetch(`/projects/get/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json().then(result => {
        console.log(result);
      });
    })
    .catch(err => {
      return err;
    });
};

//
// ─── EDIT PROJECT ───────────────────────────────────────────────────────────────
//

export const updateProject = (id, project) => dispatch => {
  fetch(`/projects/update/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })
    .then(res => {
      res.json().then(project => {
        console.log(project);
      });
    })
    .catch(err => {
      return err;
    });
};

//
// ─── DELETE PROJECT ─────────────────────────────────────────────────────────────
//

export const deleteProject = id => dispatch => {
  fetch(`/projects/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      res.json().then(result => {
        console.log(result);
      });
    })
    .catch(err => {
      return err;
    });
};
