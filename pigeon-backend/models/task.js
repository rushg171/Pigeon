const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  id: {
    type: String
    //require: true
  },
  key: {
    type: String,
    require: true
  },
  product: {
    type: [String]
  },

  createdBy: {
    type: String
  },
  fileLocation: {
    type: String
  },
  members: {
    type: String
  },
  leader: {
    type: String
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  status: {
    type: String
  },
  updatestatus: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
