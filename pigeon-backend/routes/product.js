const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.js");

router.post("/create", controller.createProduct);

router.get("/all", controller.getProduct);

router.post("/update", controller.updateProduct);

router.delete("/delete", controller.deleteProduct);

module.exports = router;
