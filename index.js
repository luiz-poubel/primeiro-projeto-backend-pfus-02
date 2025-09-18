// importa o express
 const express = require('express')

// sei nao
 const app = express()

 // define a porta que o servidor vai rodar
const port = 5000

 const path = require('path')
 const caminho = path.join(__dirname, "views")

//inportações
//IMPORTA AS ROTAS DO USUARIO
const userRoutes = require("./routes/userRoutes")

// Interpretador de json, pra tratar as informações do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//cria uma rota para as sub rotas de usuário
app.use("/usuarios", userRoutes)

// Definindo o ejs como template engine
app.set('view engine', 'ejs')

//Definindo 'atalho' onde buscar as pages
app.set("views",path.join(__dirname, "views"))


//rota de página inicial
 app.get("/home",(req,res) =>{
      res.status(200)
      res.render("index")
 })
//rota para quando tentar acessar uma rota que não existe
 app.use((req,res) =>{
     res.status(404)
     res.render("404")
 })

// rota inicial do projeto
  app.get("/", (req,res) => {
      res.Status(200).send("Olá, parabéns conseguiu")
  } )


// // inicia o servidor e faz ele tipo "escutar" as requisições
 app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`);  
})