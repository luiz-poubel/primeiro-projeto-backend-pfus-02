// Importar o json para servir como banco de dados
const db = require("../data/db.json");

// Variável pra armazenar os usuários vindos do db
let listausuarios = db.usuarios;

module.exports = {
  // LOGIN
  // Função para válidar o login
  login: (email, senha) => {
    // Busca na lista de usuários,se tem aquele usuário com as informações que ele me passou
    let logado =
      listausuarios.find(
        (user) => user.email == email && user.senha == senha
      ) || null;
    return logado;
  },

  //CRUD
  // Função para cadastrar um novo usuario
  salvar: ({ usuario, email, senha, tipo }) => {
    const novoUsuario = {
      id: listausuarios.length + 1,
      usuario,
      email,
      senha,
      tipo
    };
    listausuarios.push(novoUsuario);
    console.log("Novo usuário salvo:", novoUsuario);
    return novoUsuario;
  },
  // Busca todos os usuários do banco
  listarTodos: () => {
    return listausuarios;
  },
  // Busca um usuário específico do banco
  buscarPorId: (id) => {
    return listausuarios.find((user) => user.id == id || null);
  },

  atualizar: (id, { usuario, email, senha }) => {
    // Busca na lista de usuários, um usuário com aquele id específico, se achar, pega o index dele e guarda na variávl index
    const index = listausuarios.findIndex((user) => user.id == id);
    // Se não achar, significa que um usuário com aquele index não existe
    if (index === -1) return null;
    // Se achar um usuário, substitui as informações que estavam nele, pelas novas enviadas
    listausuarios[index] = {
      ...listausuarios[index],
      listausuarios: usuario || listausuarios[index].usuario,
      listausuarios: email || listausuarios[index].email,
      listausuarios: senha || listausuarios[index].senha,
    };
    // Retorna o usuário atualizado
    return listausuarios[index];
  },
  deletar: (id) => {
    // Busca na lista de usuários, um usuário com aquele id específico, se achar, pega o index dele e guarda na variávl index
    const index = listausuarios.findIndex((user) => user.id == id);
    // Se não achar, significa que um usuário com aquele index não existe
    if (index === -1) return false;
    // Atualiza o array com os usuários, agora com o usuário já retirado
    const usuarioRemovido = listausuarios.splice(index, 1);
    return usuarioRemovido;
  },
};
