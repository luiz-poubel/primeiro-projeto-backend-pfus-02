const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "views")

// Importações
// Importa as rotas de usuário
const produtosRoutes = require("./routes/produtosRoutes")

// Interpretador de json, pra tratar as informações do body
app.use(express.urlencoded( {extended:true} ))
app.use(express.json())

// Cria uma rota principal para as sub rotas de usuário
app.use("/produtos", produtosRoutes)

//Definindo o ejs como template engine
app.set('view engine', 'ejs')

// Definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"))

//Rota de página inicial
app.get("/home", (req,res) => {
    res.status(200).render("index", {Titulo: "Página inicial"})
} )

//Rota inicial do projeto
app.get("/", (req,res) => { 
    res.status(200).render("index", {Titulo: "Página inicial"})
 })


//Rota pra quando tentar acessar uma rota que não existe
app.use((req,res) => {
    res.status(404).render("404", {Titulo: "Página de erro"})
})


// Subir o servidor 
app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})