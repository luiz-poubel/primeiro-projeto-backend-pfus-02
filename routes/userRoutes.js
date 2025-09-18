// importação do módulo express
const express = require("express")

//criando uma vaiável pra gerenciar as rotas de usuário
const roteador = express.Router()

//Impoortando tudo que tem no arquivo de cotroller do usuário
const userController = require("../controllers/userController")

//login
//rota pra solicitar a página de login
roteador.get("/login", userController.formLogin)
//Rota pra enviar dados na página de login
roteador.post("/login", userController.loginUsuario)

//criando a exportação desse arquivo
module.exports = roteador