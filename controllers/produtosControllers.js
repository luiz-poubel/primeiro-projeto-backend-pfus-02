const produtosModel = require("../models/produtosModel.js");

module.exports = {
  formLogin2: (req, res) => {
    res.render("login");
  },

  cadProduto: (req, res) => {
    const { nome, descrição, preço, quantidade, categoria } = req.body;

    const cadastrado = produtosModel.Cadastrar({
      nome,
      descrição,
      preço,
      quantidade,
      categoria
    });

    if (!cadastrado) {
      return res.status(401).json({ mensagem: "Bota as informações certas, mano" });
    }

    res.json({ mensagem: "Produto cadastrado com sucesso", produto: cadastrado });
  },

  formCadastroProduto: (req, res) => {
    res.render("cadastro");
  },

  salvarProduto: (req, res) => {
    const { nome, descrição, preço, quantidade, categoria } = req.body;

    produtosModel.Cadastrar({ nome, descrição, preço, quantidade, categoria });

    res.render("cadastroConfirmado");
  },

  listarprodutos23: (req, res) => {
    const produtos = produtosModel.listar();
    res.json(produtos);
  },

  buscarproduto: (req, res) => {
    const id = req.params.id;
    const produto = produtosModel.buscarPorIdprod(id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
  },

  atualizarProdutos: (req, res) => {
    const id = req.params.id;
    const { nome, descrição, preço, quantidade, categoria } = req.body;

    const produtoAtualizado = produtosModel.atualizar(id, {
      nome,
      descrição,
      preço,
      quantidade,
      categoria
    });

    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json({ mensagem: "Produto atualizado com sucesso", produto: produtoAtualizado });
  },

  deletarProduto: (req, res) => {
    const id = req.params.id;
    const deletado = produtosModel.deletar(id);

    if (!deletado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json({ mensagem: "Produto deletado com sucesso" });
  }
};
