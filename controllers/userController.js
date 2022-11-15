const User = require("../models/user");


// Insere un utilisateur dans la base donnée.
exports.create = (req, res) => {
    // req -> variable qui contient la requete HTTPs parsée par express.js.
    // req.body -> sense etre un utilisateur sous forme json.

    const new_user = new User({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        created_at: Date.now(),
        updated_at: Date.now()
    })

    new_user.save((err) => {
        if (err) {
            res.json({status: "Error"})
        } else {
            res.json({status: "Ok"})
        }
    })
}

// Liste l'ensemble des utilisateurs de la base de donnée.
exports.list = (req, res) => {
    User.find({}, "email first_name last_name created_at", (err, users) => {
        if (err) {
            res.json({status: "Error", data: null})
        } else {
            res.json({status: "Ok", data: users})
        }
    })
}
