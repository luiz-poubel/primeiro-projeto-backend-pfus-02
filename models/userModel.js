// importar o json para servir como banco de dados
const db = require("../data/db.json")

//Variável pra armazenar os usuários vindos do db
let listaUsuarios = db.usuarios

module.exports = {
    // Login
    //Função para validar o login
    login : (usuario,senha) => { 
        // busca na lista de usuários, se tem aquele usuário com as informações que ele me passou 
        let logado = listaUsuarios.find((user) =>{user.email === usuario && user.senha === senha}) || null

        return logado 
    }
}
