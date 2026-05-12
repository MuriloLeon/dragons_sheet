var fichaModel = require("../models/fichaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  fichaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  fichaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}


function buscarPorId(req, res) {
  var id = req.params.id;

  fichaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  fichaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a ficha com o cnpj ${cnpj} já existe` });
    } else {
      fichaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
