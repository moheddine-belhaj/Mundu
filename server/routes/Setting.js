const express = require("express");
const router = express.Router();

const userdriverCtrl = require("../controllers/Setting");

router.put("/modif/:id", userdriverCtrl.modifyUser);
router.put("/reset/:id", userdriverCtrl.resetPassword);

module.exports = router;
