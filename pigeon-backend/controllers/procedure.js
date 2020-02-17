const express = require("express");
const Procedure = require("../models/procedure");

const controller = {
  getProcedure: async (req, res) => {
    try {
      const { id } = req.body;
      const result = await Procedure.findOne({ _id: id });
      console.log(result);
      res.send({ code: 1, data: result });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        code: 0,
        message: "Request failed!"
      });
    }
  },

  getAllProcedure: async (req, res) => {
    try {
      const result = await Procedure.find({ isDeleted: false });
      console.log(result);
      res.send({ code: 1, data: result });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        code: 0,
        message: "Request failed!"
      });
    }
  },

  createProcedure: async (req, res) => {
    try {
      const { name, fileLocation, createdBy } = req.body;
      const newProcedure = new Procedure({
        name: name,
        fileLocation: fileLocation,
        createdBy: createdBy
      });
      const result = await newProcedure.save();
      console.log({ code: 1, data: result });
      res.send({ code: 1, data: result });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        code: 0,
        message: "Request failed!"
      });
    }
  },

  updateProcedure: async (req, res) => {
    try {
      const { id, name, fileLocation, createdBy } = req.body;
      const updates = {
        name: name,
        fileLocation: fileLocation,
        createdBy: createdBy
      };
      const options = { new: true, overwrite: false };

      const result = await Procedure.findOneAndUpdate(
        { _id: id },
        updates,
        options
      );
      console.log(result);
      res.send({
        code: 1,
        data: result
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        code: 0,
        message: "Request failed!"
      });
    }
  },

  deleteProcedure: async (req, res) => {
    try {
      const { id } = req.body;
      updates = {
        $set: {
          isDeleted: true
        }
      };

      const result = await Procedure.findByIdAndUpdate(id, updates);
      console.log(result);
      res.send({ code: 1, message: "Deleted successfully!" });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        code: 0,
        message: "Request failed!"
      });
    }
  }
};

module.exports = controller;
