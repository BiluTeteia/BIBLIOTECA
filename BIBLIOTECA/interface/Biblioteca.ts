import { Livro } from "../class/Livro";
import { Usuario } from "../class/Usuario";

export interface BibliotecaInterface {
  listaDeLivros: Livro[];
  listaDeUsuarios: Usuario[];
  consultaLivro(nomeLivro: string): string;
  listaDeLivrosDisponiveis(): string;
  listaDeLivrosEmprestados(): string;
  listaDeLivrosAtrasados(): string;
  listaDeLivrosPorGenero(genero: string, lista: Livro[]): string;
  cadastroUsuario(usuario: Usuario): string;
  emprestimo(usuario: Usuario, livro: Livro): string;
  historicoUsuario(usuario: Usuario): string;
  reserva(usuario: Usuario, livro: Livro): string;
  verificarMulta(usuario: Usuario): string;
}
