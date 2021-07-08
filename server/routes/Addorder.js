const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Neworder = mongoose.model("Order");
const jwt = require("jsonwebtoken");
const { jwtkey } = require("../keys");

router.post("/Add", async (req, res) => {
  const {
    util,
    origin,
    distination,
    clientName,
    clientPhone,
    poid,
    qte,
  } = req.body;

  try {
    const order = new Neworder({
      util,
      origin,
      distination,
      clientName,
      clientPhone,
      poid,
      qte,
    });
    await order.save();
    //const tokenOrder = jwt.sign({ orderId: order._id }, jwtkey);
    res.send({ order });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.get("/all", (req, res, next) => {
  Neworder.find().then((result) => {
    res.status(200).json({
      orderData: result,
    });
  });
});

router.get("/oneById:id", async (req, res) => {
  const id = req.params.id;

  Neworder.findById(id).then((result) => {
    res.status(200).json({
      orderData: result,
    });
  });
});
module.exports = router;
