const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.modifyUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.resetPassword = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.oldpassword, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          } else {
            bcrypt.hash(req.body.password, 10).then((hash) => {
              const obj = { password: hash };
              User.updateOne(
                { _id: req.params.id },
                { ...obj, _id: req.params.id }
              )
                .then(() =>
                  res.status(200).json({ message: "password modifié !" })
                )
                .catch((error) => res.status(400).json({ error }));
            });
          }
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
