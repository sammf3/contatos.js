const contatos = require('./contatos')

    function listarContato() {
    if (contatos.length === 0) {
      console.log('Nenhum contato foi cadastrada.')
    } else {
      contatos.forEach((residencia, index) => {
      console.log(`${index + 1}. Nome: ${morador.nome}.
    ${residencia.nome} Rua : ${rua.nome}.`)
      })
    }
  }
  module.exports = listarContato;