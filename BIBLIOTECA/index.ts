import { Biblioteca } from "./class/Biblioteca";
import { Livro } from "./class/Livro";
import { Usuario } from "./class/Usuario";
import { LivroGenero } from "./enum/LivroGenero";
import { LivroStatus } from "./enum/LivroStatus";

const livro1 = new Livro("titulo1", "autor1", [LivroGenero.BIOGRAFIA, LivroGenero.ROMANCE], LivroStatus.DISPONIVEL);
const livro2 = new Livro("titulo2", "autor2", [LivroGenero.FANTASIA, LivroGenero.FICCAO], LivroStatus.EMPRESTADO);
const livro3 = new Livro("titulo3", "autor3", [LivroGenero.TERROR, LivroGenero.FANTASIA], LivroStatus.ATRASADO);
const livro4 = new Livro("titulo4", "autor4", [LivroGenero.FICCAO, LivroGenero.ROMANCE], LivroStatus.RESERVADO);
const livro5 = new Livro("titulo5", "autor5", [LivroGenero.TERROR, LivroGenero.FICCAO], LivroStatus.DISPONIVEL);

const usuario1 = new Usuario("nome1", "11111111111", [], [], [], 0);
const usuario2 = new Usuario("nome2", "22222222222", [], [], [], 0);
const usuario3 = new Usuario("nome3", "33333333333", [], [], [], 0);
const usuario4 = new Usuario("nome4", "44444444444", [], [], [], 0);

const biblioteca = new Biblioteca([livro1, livro2, livro3, livro4, livro5], [usuario1, usuario2, usuario3, usuario4]);

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

// console.log(biblioteca.emprestimo(usuario2, livro1))
// console.log(biblioteca.historicoUsuario(usuario2))

// console.log(biblioteca.reserva(usuario4, livro3))

// console.log(biblioteca.verificarMulta(usuario1))
