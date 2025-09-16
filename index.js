// importa o express
const express = require('express')

// sei nao
const app = express()

// define a porta que o servidor vai rodar
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "pages")

app.get("/home",(req,res) =>{
     res.status(200)
     res.sendFile(`${caminho}/index.html`)
})

app.use((req,res) =>{
    res.status(404)
    res.sendFile(`${caminho}/404.html`)
})




 //cria uma rota
 app.get("/", (req,res) => {
     res.Status(200).send("Olá, parabéns conseguiu")
 } )


// inicia o servidor e faz ele tipo "escutar" as requisições
 app.listen(port, () => {
   console.log(`Servidor funcionando em http://localhost:${port}`);  
})


// meter um pokemmon lá
app.get("/pokemon",(req,res) => {
    res.status(200)
    res.send("pikachu e charmander")
})

// mesma coisa linha 16
app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`);  
})