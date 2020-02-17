const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: {
    type: String,
    files: {
      type: Array
    },
    createDate: {
      type: Date,
      default: new Date()
    }
  }
});

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  profileImg: {
    type: String
  },
  playlist: [playlistSchema],

  memberships: [
    {
      type: String,
      date: {
        type: Date,
        default: new Date()
      }
    }
  ],
  createDate: {
    type: Date,
    default: new Date()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("User", userSchema);
