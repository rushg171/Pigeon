const express = require("express");
const router = express.Router();

const controller = require("../controllers/member.js");

router.post("/create", controller.createMember);

router.get("/all", controller.getMember);

router.post("/update", controller.updateMember);

router.delete("/delete", controller.deleteMember);

module.exports = router;
