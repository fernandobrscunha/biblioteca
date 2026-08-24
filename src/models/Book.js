//Conexão com o banco de dados
const db = require('../config/db.js')

/**
 * Insere um livro na tabela "books".
 * 
 * @param {Object} book - Dados do livro a ser 
 * inserido. O livro deve conter: Título, autor e sinopse
 * 
 * @returns {Promise<Object>} Resultado da operação:
 * success em caso de inserção ou error em caso 
 * de falha.
 */
function save(book) {
  return db.insert(book).into('books')
    .then( _ => {
      return { 
        type: "success", 
        msg: "Livro inserido com sucesso!" 
      }
    })
    .catch(erro => {
      return { 
        type: "error", msg: "Erro: " + erro }
    })
}//fim do salvar

//Exportando a função save
module.exports = { save }