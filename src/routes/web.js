//Importa o módulo Router do express
const router = require('express').Router()

//Rotas
// GET   /books            => Listar todos os livros
// GET   /books/new        => Exibir o form
// POST  /books/new        => Cadastrar o livro
// GET   /books/:id        => Exibir o livro
// POST  /books/edit/:id   => Editar o livro
// POST  /books/delete/:id => Excluir o livro

router.get('/', (req, res) => {
  res.render('pages/home')
})

router.get('/books/new', (req, res) => {
  res.render('pages/book_form')
})

//Exporta as rotas para outro arquivo
module.exports = router