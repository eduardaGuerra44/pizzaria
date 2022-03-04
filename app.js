const express = require('express')

const app = express()
const PizzasRouter = require('./routes/PizzasRouter')

app.get('/', (req, res) => {
    res.send("Olá visitante!!")
    console.log("servidor rodando na porta 3000")
})

app.listen(3000); 