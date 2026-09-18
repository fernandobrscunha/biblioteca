//Importa o módulo Router do express
const router = require('express').Router()

const BookController = 
require('../controllers/BookController')

//Rotas
// GET   /books            => Listar todos os livros
// GET   /books/new        => Exibir o form
// POST  /books/new        => Cadastrar o livro
// GET   /books/:id        => Exibir o livro
// POST  /books/edit/:id   => Editar o livro
// POST  /books/delete/:id => Excluir o livro

router.get('/', BookController.index)

router.get('/books/new', (req, res) => {
  res.render('pages/book_form')
})

router.post('/books/new', BookController.store);

//Exporta as rotas para outro arquivo
module.exports = router