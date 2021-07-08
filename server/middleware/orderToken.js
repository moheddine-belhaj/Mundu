const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Order = mongoose.model("Order");
const { jwtkey } = require("../keys");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization === Bearer sfafsafa

  const tokenOrder = authorization.replace("Bearer ", "");
  jwt.sign(tokenOrder, jwtkey, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "you must be logged in 2" });
    }
    const { orderId } = payload;
    const order = await Order.findById(orderId);
    req.order = order;
    next();
  });
};
