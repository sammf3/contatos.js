/* Módulo residências para armazenar os objetos.
• Função para listar as residências cadastradas.
• Função para criar uma nova residência.
• Função para atualizar as informações de uma residência existente.
• Função para remover uma residência existente*/


const prompt = require('prompt - sync')(); //entrada
const adicionarContato = require('./adicionar');
const listarContato = require('./listar');
const removerContato = require('./remover');

let contato = [
];
let index;
exibirMenu()

function exibirMenu(){
    console.log(`

    -------*- Menu -*------
    1. Adicionar contato
    2. Listar contato
    3. Atualizar contato
    4. Marcar como concluído
    5. Sair
    `)
    let opcao = prompt('Escolha uma opção:')

        switch(opcao){
            case '1':
               adicionarContato()
               let nome = prompt ('Digite o nome do contato:');
    let residencia = prompt('Digite a residencia:');
    let bairro = prompt('Digite o bairro:');
    let rua = prompt('Digite a rua:');
     contato.push({ nome: nome, residencia:residencia, bairro: bairro, rua:rua})
     console.log('Cadastro adicionado com sucesso!');
    exibirMenu()

                break
            case '2':
                listarContato()
                if (contato.length === 0) {
                  console.log('Nenhum contato cadastrado.')
                } else {
                  console.log('Lista de contato: ')
                  contatos.forEach((contato, index) => {
                  console.log(`${index + 1}. Nome: ${contato.nome}.
                 Rua: ${rua.rua}. Residencia: ${residencia.residencia}`)
                  })
                }
                exibirMenu()
              
                break
            case '3':
               atualizarContato()
               function atualizarContato() {
                let contato = parseInt(prompt(` Digite o numero do cadastro que deseja atualizar :`  ))
                if(numero > 0 && numero <= contatos.length) { 
                let nome = prompt ('Digite o nome do contato:');
                let residencia = prompt('Digite a residencia:');
                let bairro = prompt('Digite o bairro:');
                let rua = prompt('Digite a rua:');
                contata[numero - 1] =
                {nome,rua,bairro,residencia}
                console.log('contato atualizado com sucesso!!!')
                exibirMenu()
                console.log('Número inválidop tente novamente')
            }
                }
                break
            case '4':
               RemoverContato()
               let numero = prompt('Digite o numero que deseja remover:')
               if(numero > 0 && numero <= contatos.length) { 
             contatos.splice(numero - 1,1)
             console.log('contato cancelado com sucesso!!!')
               }else{ 
                 console.log('Número inválidop tente novamente')
               }
               exibirMenu()
               
                break
            case '5':
                rl.close
                break
            default:
                console.log('Essa opção esta errada!, tente novamente por favor!')
                exibirMenu()
                break
        }
    }

    
    
    
 