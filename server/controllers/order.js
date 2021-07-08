const Order = require("../models/Order");

{
  exports.getOneOrder = (req, res, next) => {
    Order.findOne({ _id: req.params.id })
      .then((order) => res.status(200).json(order))
      .catch((error) => res.status(400).json({ error }));
  };
}

exports.getAllOrder = (req, res, next) => {
  Order.find()
    .then((order) => res.status(200).json(order))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyOrder = (req, res, next) => {
  Order.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
