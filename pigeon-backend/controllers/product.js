const express = require("express");
const Product = require("../models/product.js");

const controller = {
  createProduct: async (req, res) => {
    try {
      await Product.create(req.body).then(data => {
        res.send(data);
      });
    } catch (err) {
      console.log("error creating!");
    }
  },

  getProduct: async (req, res) => {
    try {
      const id = req.params.id;

      await Product.find({}).then(data => {
        res.send(data);
      });
    } catch (err) {
      console.log("error finding!");
    }
  },

  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const update = req.body;
      const options = { new: true };

      await Product.findOneAndUpdate({ _id: id }, update, options).then(
        data => {
          res.send(data);
        }
      );
    } catch (err) {
      console.log("error updating");
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const options = {
        $set: {
          isDeleted: true
        }
      };

      await Product.findByIdAndUpdate(id, options).then(data => {
        res.send(data + "\n is deleted");
      });
    } catch (err) {
      console.log("error deleting!");
    }
  }
};

module.exports = controller;
