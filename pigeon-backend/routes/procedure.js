const express = require("express");
const router = express.Router();
const controller = require("../controllers/procedure.js");

router.post("/create", controller.createProcedure);

router.get("/one", controller.getProcedure);

router.get("/all", controller.getAllProcedure);

router.post("/update", controller.updateProcedure);

router.post("/delete", controller.deleteProcedure);

module.exports = router;
