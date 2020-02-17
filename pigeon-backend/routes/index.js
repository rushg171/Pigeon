const express = require("express");
const router = express.Router();

const procedureRouter = require("./procedure.js");
const productRouter = require("./product.js");
//const productRouter = require("./product");
//const memberRouter = require("./member");
//const taskRouter = require("./task");

//procedure
router.use("/procedure", procedureRouter);

//product
router.use("/product", productRouter);

//user

//tasks

module.exports = router;
