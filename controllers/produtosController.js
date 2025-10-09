const path = require("path")
const produtosModel = require("../models/produtosModel")

module.exports = {
    
    formCadastroProduto: (req, res) => {
    return res.render('produtos/cadastroProdutos', { titulo: 'Cadastro de Produtos' })
    },

    salvarProduto: (req, res) => {
        const { id, nome, descricao, preco, quantidade, categoria, linkdeimagem } = req.body
        produtosModel.salvar({ id, nome, descricao, preco, quantidade, categoria, linkdeimagem })
         res.render("produtos/confirmacaoProdutos");
    },
   
    listarProdutos: (req, res) => {
        const produtos = produtosModel.listarTodos()
       res.json(produtos);
       
    },
    
    buscarProduto: (req, res) => {
        const id = req.params.id
        const produto = produtosModel.buscarPorId(id)
       
        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" })
        }
        
        return res.json(produto)
    },
   
    atualizarProduto: (req, res) => {
       const id = req.params.id
       const { nome, descricao, preco, quantidade, categoria, linkdeimagem } = req.body
       const produtoAtualizado = produtosModel.atualizar(id, { nome, descricao, preco, quantidade, categoria, linkdeimagem })

        if (!produtoAtualizado) {
            return res.status(404).json({ mensagem: "Produto não encontrado" })
        }
         
        return res.json({ mensagem: "Produto foi atualizado" })
    },
   
    deletarProduto: (req, res) => {
        const id = req.params.id
        const deletado = produtosModel.deletar(id)

        if (!deletado) {
            return res.status(404).json({ mensagem: "Produto não encontrado" })
        }
           
        return res.json({ mensagem: "Produto foi deletado" })
    }
}