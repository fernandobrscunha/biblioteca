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
    .then(_ => {
      return {
        type: "success",
        msg: "Livro inserido com sucesso!"
      }
    })
    .catch(erro => {
      return {
        type: "error", msg: "Erro: " + erro
      }
    })
}//fim do salvar

/**
 * Retorna todos os livros cadastrados,
 * ordenados pelo título em ordem crescente.
 * @returns {Promise} Lista de livros ou objeto de erro.
*/
function all() {
  return db.select('*').from('books')
    .orderBy('title', 'ASC')
    .then(books => { return books })
    .catch(erro => {
      return { type: "error", msg: "Erro: " + erro }
    })
}//fim do all

//Exportando a função save
module.exports = { save, all }