const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtosControllers");

// Rota para exibir o formulário de login
router.get("/login", produtosController.formLogin2);

// Rota para exibir o formulário de cadastro de produto
router.get("/cadastrar", produtosController.formCadastroProduto);

// Rota para salvar um novo produto (POST)
router.post("/salvar", produtosController.salvarProduto);

// Rota para listar todos os produtos
router.get("/", produtosController.listarprodutos23);

// Rota para buscar um produto específico por ID
router.get("/:id", produtosController.buscarproduto);

// Rota para atualizar um produto por ID (PUT)
router.put("/:id", produtosController.atualizarProdutos);

// Rota para deletar um produto por ID
router.delete("/:id", produtosController.deletarProduto);

module.exports = router;
