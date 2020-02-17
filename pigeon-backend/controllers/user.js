const express = require("express");
const User = require("../models/user");

const Controller = {
  getUser: async (req, res) => {
    try {
      let id = req.body.id;
      const result = await User.findById(id);
      console.log("User found!" + result);
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const result = await User.find({});
      console.log(result);
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  },

  createUser: async (req, res) => {
    try {
      const param = req.body;
      const result = await new User({ param }).save();
      console.log("New User!" + result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  },

  updateUser: async (req, res) => {
    try {
      const query = req.body.query;
      const param = req.body.param;
      const result = await User.findByIdAndUpdate(query, param);
      console.log("User updated!" + result);
      res.send("Updated!" + result);
    } catch (err) {
      console.log(err);
    }
  },

  createPlaylist: async (req, res) => {
    try {
      const query = req.body.query;
      const param = req.body.param;
      const update = {
        $set: {
          $push: { playlist: param }
        }
      };
      const result = await User.findByIdAndUpdate(query, update);
      console.log("Playlist created" + result);
      res.send("PlaylistCreated" + result);
    } catch (err) {
      console.log(err);
    }
  },

  updatePlaylist: async (req, res) => {
    try {
      const query = req.body.query;
      const param = req.body.param;
      const update = {
        $set: {
          playlist: param
        }
      };

      const result = await User.findByIdAndUpdate(query, update);
      console.log("Playlist Updated" + result);
      res.send("Playlist Updated" + result);
    } catch (err) {
      console.log(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.body.id;
      const option = {
        $set: {
          isDeleted: true
        }
      };
      const result = await User.findByIdAndUpdate(id, option);
      console.log("User Deleted!" + result);
      res.send("User Deleted!");
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = Controller;
