const prompt = require("prompt-sync")();
const Livro = require("./livro.js");
const livros = [];

let opcao = null;
while (opcao !== 0) {
  console.log("\n-- BIBLIOTECA --");
  console.log("1 -cadastrar livros");
  console.log("2 -listar livros");
  console.log("3 -alterar livro");
  console.log("4 -estatisticas");
  console.log("0 -sair");

  opcao = parseInt(prompt("opçao: "));
  if (isNaN(opcao)) {
    console.log("digite um numero valido");
    continue;
  }

  switch (opcao) {
    case 1:
      opcao = 1;
      let titulo = prompt("titulo: ");
      let autor = prompt("autor: ");
      let genero = prompt("genero: ");
      let anoPubli = parseInt(prompt("ano de publicaçao: "));
      let numPaginas = parseInt(prompt("numero e paginas: "));

      let novoLivro = new Livro(titulo, autor, genero, anoPubli, numPaginas);
      livros.push(novoLivro);
      console.log("livro cadastrado");
      break;

    case 2:
      if (livros.length === 0) {
        console.log("nenhum livro cadastrado");
      } else {
        livros.forEach((livro, indice) => {
          console.log(`[${indice}] ${livro.getInfo()}`);
        });
      }
      break;

    case 3:
      if (livros.length === 0) {
        console.log("nenhum livro cadastrado");
        break;
      }
      console.log("\nlivros disponiveis:");
      livros.forEach((livro, indice) => {
        console.log(`[${indice}] ${livro.getInfo()}`);
      });
      let indice = parseInt(prompt("digite o indice do livro: "))
      if(
        isNaN(indice)||
        indice<0||
        indice>=livros.length
      ){
        console.log("indice invalido!")
        break;
      }
      let livro = livros[indice];
      let novoTitulo = prompt(`titulo (${livro.titulo}): `)
      if (novoTitulo.trim() !== ""){  
        livro.titulo = novoTitulo;
      }

      let novoAutor = prompt(`Autor (${livro.autor}): `)
      if (novoAutor.trim() !== ""){  
        livro.autor = novoAutor;
      }

      let novoGenero = prompt(`Genero (${livro.autor}): `)
      if (novoGenero.trim() !== ""){  
        livro.genero = novoGenero;
      }

      let novoAno = prompt(`Ano (${livro.anoPubli}): `)
      if (novoTitulo.trim() !== ""){  
        livro.anoPubli = parseInt(novoAno);
      }

      let novasPaginas = prompt(`Paginas (${livro.numPaginas}): `)
      if (novasPaginas.trim() !== ""){  
        livro.numPaginas = parseInt(novasPaginas);
      }

      console.log("Livro alterado!");
      break;

    case 4:
        if (livros.length === 0) {
            console.log("Nenhum livro cadastrado!");
            break;
        }
        let auxiliar = new Livro();
        let generos = auxiliar.contarPorGenero(livros);
        console.log("\nQuantidade por gênero: ")

        for (let genero in generos){
            console.log(`${genero}: ${generos[genero]}`);
        }

        let media = Number(auxiliar.mediaNumPaginas(livros))

        console.log(`\nMedia de paginas: ${media.toFixed(2)}`)
        
      break;

    case 0:
      console.log("programa encerrado");
      break;
    default:
      console.log("opcao invalida");
  }
}
