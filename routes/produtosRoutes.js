const express = require("express")
const roteador = express.Router()
const produtosController = require("../controllers/produtosController")


roteador.get("/cadastrar", produtosController.formCadastroProduto)

roteador.post("/cadastrar", produtosController.salvarProduto)

roteador.get("/produtos", produtosController.listarProdutos)

roteador.get("/:id", produtosController.buscarProduto)

roteador.put("/:id", produtosController.atualizarProduto)

roteador.delete("/:id", produtosController.deletarProduto)

module.exports = roteador