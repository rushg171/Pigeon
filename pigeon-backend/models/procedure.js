const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  createdBy: {
    type: String
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  fileLocation: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Procedure", procedureSchema);
