//Importa o módulo de path pra saber as pastas e arquivos do projeto
const path = require("path")

// Importa tudo que tem no model
const userModel = require("../models/userModel")

module.exports = {
// Responde a requisição mostrando a visualização de tela de login
    formLogin : (req,res) => {
        res.render("login")
    },
    //Função para levar os dados preenchidos para o model realizar o login
    loginUsuario : (req,res) => { 
        //Cria um objeto com as informações do body, retirados dos inputs
        const { email, senha } = req.body
        //Manda as informações do objeto para o model
        const logado  = userModel.login(email,senha)
        
        // se não conseguiu logar, manda uma mensagem de erro
        if(!logado){
           return res.status(401).json({mensagem: "Usuário ou senha inválidos"})
        }
        //se conseguiu manda uma mensagem de confirmação
        else{
            res.json({mensagem: "login realizado"})
        }
    }
}