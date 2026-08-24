//Importando o Modelo "Livro"
const Book = require('../models/Book')

async function store(req,res){
    //Receber os dados
    const title = req.body.title
    const author = req.body.author
    const resume = req.body.resume
    const cover = "https://img.magnific.com/premium-psd/green-book-cover-mockup_1139106-7538.jpg?semt=ais_hybrid&w=740&q=80"

    //Solicitar a inserção no BD
    const msg = await Book.save({title, author, resume, cover})

    //Enviar uma respostas
    return res.send(msg)
}

module.exports = { store }
