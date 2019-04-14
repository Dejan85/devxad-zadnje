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
  },
  created: {
    type: Date,
    default: Date.now
  },
  update: Date,
  photo: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model("Projects", projectsSchema);
