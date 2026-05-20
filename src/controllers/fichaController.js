var fichaModel = require("../models/fichaModel");

function buscarFicha(req, res) {
  var idUsuario = req.params.id;
  console.log(idUsuario)

  fichaModel.buscarFicha(idUsuario).then(function(resultado){
    if (resultado.length > 0) {
        res.status(200).json(resultado);
    } else {
        res.status(204).json([]);
    }
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function criarFicha(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    fichaModel.criarFicha(nome).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarFicha,
    criarFicha
}