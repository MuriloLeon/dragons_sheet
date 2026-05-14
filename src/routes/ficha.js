var express = require("express");
var router = express.Router();

var fichaController = require("../controllers/fichaController");

router.post("/criarFicha", function (req, res) {
    fichaController.criarFicha(req, res);
});

router.get("/buscarFicha", function (req, res) {
    fichaController.buscarFicha(req, res);
});

module.exports = router;