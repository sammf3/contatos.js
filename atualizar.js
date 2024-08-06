const contatos = require('./contatos')

function atualizarContato(index,novoContato) {
contatos[index]= novoContato;
}


module.exports = atualizarContato;