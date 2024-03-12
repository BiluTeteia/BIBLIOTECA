"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./class/Biblioteca");
var Livro_1 = require("./class/Livro");
var Usuario_1 = require("./class/Usuario");
var LivroGenero_1 = require("./enum/LivroGenero");
var LivroStatus_1 = require("./enum/LivroStatus");
var livro1 = new Livro_1.Livro("titulo1", "autor1", [LivroGenero_1.LivroGenero.BIOGRAFIA, LivroGenero_1.LivroGenero.ROMANCE], LivroStatus_1.LivroStatus.DISPONIVEL);
var livro2 = new Livro_1.Livro("titulo2", "autor2", [LivroGenero_1.LivroGenero.FANTASIA, LivroGenero_1.LivroGenero.FICCAO], LivroStatus_1.LivroStatus.EMPRESTADO);
var livro3 = new Livro_1.Livro("titulo3", "autor3", [LivroGenero_1.LivroGenero.TERROR, LivroGenero_1.LivroGenero.FANTASIA], LivroStatus_1.LivroStatus.ATRASADO);
var livro4 = new Livro_1.Livro("titulo4", "autor4", [LivroGenero_1.LivroGenero.FICCAO, LivroGenero_1.LivroGenero.ROMANCE], LivroStatus_1.LivroStatus.RESERVADO);
var livro5 = new Livro_1.Livro("titulo5", "autor5", [LivroGenero_1.LivroGenero.TERROR, LivroGenero_1.LivroGenero.FICCAO], LivroStatus_1.LivroStatus.DISPONIVEL);
var usuario1 = new Usuario_1.Usuario("nome1", "11111111111", [], [], [], 0);
var usuario2 = new Usuario_1.Usuario("nome2", "22222222222", [], [], [], 0);
var usuario3 = new Usuario_1.Usuario("nome3", "33333333333", [], [], [], 0);
var usuario4 = new Usuario_1.Usuario("nome4", "44444444444", [], [], [], 0);
var biblioteca = new Biblioteca_1.Biblioteca([livro1, livro2, livro3, livro4, livro5], [usuario1, usuario2, usuario3, usuario4]);
// console.log(biblioteca.listaDeLivros)
// console.log(biblioteca.listaDeUsuarios)
// console.log(biblioteca.consultaLivro('titulo2'))
// console.log(biblioteca.listaDeLivrosDisponiveis())
// console.log(biblioteca.listaDeLivrosEmprestados())
// console.log(biblioteca.listaDeLivrosAtrasados())
// console.log(biblioteca.listaDeLivrosPorGenero('Romance'))
// const usuarioNovo = new Usuario("nomeNovo", "00000000000", [], [], [], 0);
// console.log(biblioteca.cadastroUsuario(usuarioNovo))
// console.log(biblioteca.listaDeUsuarios)
// console.log(biblioteca.emprestimo(usuario3, livro5))
// console.log(biblioteca.historicoUsuario(usuario3))
// console.log(biblioteca.reserva(usuario1, livro1))
console.log(biblioteca.verificarMulta(usuario2));
// console.log(biblioteca.listaDeUsuarios)
