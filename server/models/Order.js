const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const orderSchema = new mongoose.Schema({
  util: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    type: String,
    required: true,
  },
  distination: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },

  clientPhone: {
    type: String,
    required: true,
  },
  poid: {
    type: String,
    required: true,
  },
  qte: {
    type: String,
    required: true,
  },
});

mongoose.model("Order", orderSchema);
