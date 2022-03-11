//importando biblioteca 
const express = require('express')
const path = require('path')

const app = express()

const PizzasRouter = require('./routes/PizzasRouter')

// configurando a aplicação 
app.set('view engine', 'ejs')
// Configurando a pasta public como contenedora dos arquivos estáticos
app.use(express.static(path.join( __dirname,'public' ) ) ) ;

app.use(PizzasRouter);

app.listen(3000); 