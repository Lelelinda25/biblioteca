const prompt = require('prompt-sync')();
const livro = require('./livro');
const livros = [];

let opcao = -1;
while (opcao !== 0){
    console.log("\n-- BIBLIOTECA --")
    console.log("1 -cadastrar livros")
    console.log("2 -listar livros")
    console.log("3 -alterar livro")
    console.log("4 -estatisticas")
    console.log("0 -sair")


    opcao = parseInt(prompt("opçao: "))
    if (isNaN(opcao)){
        console.log("digite um numero valido");
        continue;
    }
}
switch(opcao){
    case 1:
        break;

     case 2:
        break;

     case 3:
        break;

     case 4:
        break;

    case 0:
        console.log("programa encerrado")
        break;
        default:
            console.log("opcao invalida")  


}
