const express = require("express")
const roteador = express.Router()
const produtosController = require("../controllers/produtosController")


roteador.get("/cadastrar", produtosController.formCadastroProduto)

roteador.post("/cadastrar", produtosController.salvarProduto)

roteador.get("/", produtosController.listarProdutos)

roteador.get("/:id", produtosController.buscarProduto)

roteador.post("/:id", produtosController.atualizarProduto)

roteador.get("/:id", produtosController.deletarProduto)

module.exports = roteador
