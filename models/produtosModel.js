const db = require("../data/db.json")

let listaProdutos = db.produtos

module.exports = {

    salvar: ({ nome, descricao, preco, quantidade, categoria, imagem }) => {
        const novoProduto = {
            id: listaProdutos.length + 1,
            nome,
            descricao,
            preco,
            quantidade,
            categoria,
            imagem
        }
        listaProdutos.push(novoProduto)
        console.log("Novo produto salvo:", novoProduto)
        return novoProduto
    },
     
    listarTodos: () => listaProdutos
    ,
     
    buscarPorId: (id) => {
        return listaProdutos.find((produto) => produto.id == id) || null
    },

    atualizar: (id, { nome, descricao, preco, quantidade, categoria, imagem }) => {
        const index = listaProdutos.findIndex((produto) => produto.id == id)
        
        if (index === -1) return null
       
        listaProdutos[index] = {
            ...listaProdutos[index],
            nome: nome || listaProdutos[index].nome,
            descricao: descricao || listaProdutos[index].descricao,
            preco: preco || listaProdutos[index].preco,
            quantidade: quantidade || listaProdutos[index].quantidade,
            categoria: categoria || listaProdutos[index].categoria,
            imagem: imagem || listaProdutos[index].imagem
        }
        
        return listaProdutos[index]
    },

    deletar: (id) => {
        const index = listaProdutos.findIndex((produto) => produto.id == id)
        if (index === -1) return false
        const produtoRemovido = listaProdutos.splice(index, 1)
        return produtoRemovido
    },
}