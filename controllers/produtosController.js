const path = require("path");
const produtosModel = require("../models/produtosModel");

module.exports = {
  formCadastroProduto: (req, res) => {
    return res.render("produtos/cadastroProdutos", {
      titulo: "Cadastro de Produtos",
    });
  },

  salvarProduto: (req, res) => {
    const { id, nome, descricao, preco, quantidade, categoria, linkdeimagem } =
      req.body;

    // 🔧 Aqui guardamos o retorno do model
    const produto = produtosModel.salvar({
      id,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      linkdeimagem,
    });

    // Agora a variável existe e pode ser passada pra view
    res.render("produtos/confirmacaoProdutos", {
      titulo: "Confirmação de Produto",
      produto,
      tipo: "cadastro",
    });
  },
  listarProdutos: (req, res) => {
    const produtos = produtosModel.listarTodos();
    res.render("produtos/listaProdutos", {
      titulo: "Lista de Produtos",
      produtos
    });
  },

  buscarProduto: (req, res) => {
    const id = req.params.id;
    const produto = produtosModel.buscarPorId(id);

    if (!produto) {
      return res.status(404).render({ mensagem: "Produto não encontrado" });
    }

    return res.render("produtos/editarProdutos", {
      titulo: "Editar",
      produto
    });
  },

  atualizarProduto: (req, res) => {
    const id = req.params.id;
    const { nome, descricao, preco, quantidade, categoria, imagem } =
      req.body;
    const produtoAtualizado = produtosModel.atualizar(id, {
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagem,
    });

    if (!produtoAtualizado) {
      return res.status(404).render({ mensagem: "Produto não encontrado" });
    }

    return res.render("produtos/confirmacaoProdutos",{
        titulo:"Edição",
        tipo: "edicao",
        produtoAtualizado
      });
  },

  deletarProduto: (req, res) => {
    const id = req.params.id;
    const deletado = produtosModel.deletar(id);

    if (!deletado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    return res.json({ mensagem: "Produto foi deletado" });
  },
};
