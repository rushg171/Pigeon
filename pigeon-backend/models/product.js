const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: String
    //require: true
  },
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
  tasks: {
    type: [String]
  },
  logo: {
    type: String
  },

  discription: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Product", ProductSchema);
