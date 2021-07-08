const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const order = mongoose.model("Order");

router.delete("/DEL:id", async (req, res) => {
  const id = req.params.id;

  order
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete order with id=${id}. Maybe order was not found!`,
        });
      } else {
        res.send({
          id,
          message: "order was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete order with id=" + id,
      });
    });
});
module.exports = router;
