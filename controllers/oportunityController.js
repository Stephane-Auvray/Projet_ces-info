const Oportunity = require("../models/oportunity");

// Insere une oportunite dans la base donnée.
exports.create = (req, res) => {
  // req -> variable qui contient la requete HTTPs parsée par express.js.
  // req.body -> censé etre une oportunite sous forme json.

  const new_oportunity = new Oportunity({
    email: req.body.email,
    name: req.body.name,
    subject: req.body.subject,
    content: req.body.content,
    file_data: req.body.file_data,
    created_at: Date.now(),
    updated_at: Date.now(),
  });

  new_oportunity.save((err) => {
    if (err) {
      res.json({ status: "Error" });
    } else {
      res.json({ status: "Ok" });
    }
  });
};

exports.list = (req, res) => {
  Oportunity.find({}, null, (err, oportunities) => {
    if (err) {
      res.json({ status: "Error", data: null });
    } else {
      res.json({ status: "Ok", data: oportunities });
    }
  });
};
