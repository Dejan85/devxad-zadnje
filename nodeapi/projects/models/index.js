const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

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
  photo: {
    data: Buffer,
    contentType: String
  },
  postedBy: {
    type: ObjectId,
    ref: "User"
  },
  created: {
    type: Date,
    default: Date.now
  },
  update: Date,

});

module.exports = mongoose.model("Projects", projectsSchema);
