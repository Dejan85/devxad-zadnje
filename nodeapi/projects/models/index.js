const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  title: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Projects", projectsSchema);
