const express = require("express");
const router = express.Router();

const OrderCtrl = require("../controllers/order");

router.get("/allo", OrderCtrl.getAllOrder);
router.put("/:id", OrderCtrl.modifyOrder);
router.get("/:id", OrderCtrl.getOneOrder);

module.exports = router;
