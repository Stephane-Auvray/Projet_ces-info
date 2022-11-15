// API route file -> under /api/


var express = require('express');
var router = express.Router();

const user_controller = require("../controllers/userController");


// Route pour creer un utilisateur
//  -> prends en paramettre un objet json contenant les informations de l'utilisateur.
router.post('/users/create', user_controller.create);

// Route pour récupérer sous forme de tableau d'objet json la liste des utilisateurs.
//
// EX: -> GET /api/users/list -> [ { name: 'toto', email: 'toto@x.com' }, .. ]
router.get("/users/list", user_controller.list);


module.exports = router;
