const prompt = require('prompt-sync')();
const Livro = require('./livro');
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
        let titulo = prompt("titulo: ")
        let autor = prompt("autor: ")
        let genero = prompt("genero: ")
        let anoPubli = parseInt(prompt("ano de publicaçao: "))
         let numPaginas = parseInt(prompt("numero e paginas: "))

         let novoLivro = new Livro(
            titulo,
            autor,
            genero,
            anoPubli,
            numPaginas,

         )
         livros.push(novoLivro)
         console.log("livro cadastrado")
        break;

     case 2: 
         if(livros.length === 0){
            console.log("nenhum livro cadastrado")

         }else{
            livros.forEach((livro, indice) => {
                console.log(`[${indice}] ${livro.getInfo()}`)
            })
         }
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
