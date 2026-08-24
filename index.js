/* ===========================================
 Importando as dependências
=========================================== */
const express = require('express');

//Importando as rotas
const routes = require('./src/routes/web')

/* ===========================================
 Configurações do servidor
=========================================== */
const app = express() // "Ligando" o express
const port = 3000     // Definindo a porta

//Definindo o ejs como motor de template padrão
app.set('view engine', 'ejs')

//Definir a localização da pasta views
app.set('views', './src/views')

//Configurar o backend para
//aceitar requisições de um formulário
app.use(express.urlencoded({ extended: true }))

/* ===========================================
 Rotas
=========================================== */
//Utilizando as rotas do arquivo web.js
app.use(routes)

/* ===========================================
 Escuta as requisições HTTP
=========================================== */
app.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`)
})