const express = require("express");
const app = express();
const Procedure = require("../models/procedure");
const controller = {
  createProcedure: async (req, res) => {
    const newProcedure = await new Procedure({
      name: req.body.n,
      fileLocation: req.body.fl,
      addedToProduct: req.body.atp,
      createdBy: req.body.cb,
      createdDate: req.body.cd,
      updatedDate: req.body.ud
    });
    newProcedure
      .save()
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        console.log("error");
      });
  }
};

module.exports = controller;
