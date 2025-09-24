const db = require("../data/db.json");

let listaProdutos = db.produtos;

module.exports = {
  Cadastrar: ({ nome, descrição, preço, quantidade, categoria }) => {
    const novoProduto = {
      id: listaProdutos.length + 1,
      nome,
      descrição,
      preço,
      quantidade,
      categoria
    };

    listaProdutos.push(novoProduto);
    console.log("Novo produto salvo:", novoProduto);

    return novoProduto;
  },

  listar: () => {
    return listaProdutos;
  },

  buscarPorIdprod: (id) => {
    return listaProdutos.find((produto) => produto.id == id) || null;
  },

  atualizar: (id, { nome, descrição, preço, quantidade, categoria }) => {
    const index = listaProdutos.findIndex((produto) => produto.id == id);

    if (index === -1) return null;

    listaProdutos[index] = {
      ...listaProdutos[index],
      nome: nome || listaProdutos[index].nome,
      descrição: descrição || listaProdutos[index].descrição,
      preço: preço || listaProdutos[index].preço,
      quantidade: quantidade || listaProdutos[index].quantidade,
      categoria: categoria || listaProdutos[index].categoria
    };

    return listaProdutos[index];
  },

  deletar: (id) => {
    const index = listaProdutos.findIndex((produto) => produto.id == id);
    if (index === -1) return false;

    listaProdutos.splice(index, 1);
    return true;
  }
};

  