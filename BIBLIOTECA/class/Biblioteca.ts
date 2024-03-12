import { LivroStatus } from "../enum/LivroStatus";
import { BibliotecaInterface } from "../interface/Biblioteca";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Biblioteca implements BibliotecaInterface {
  listaDeLivros: Livro[];
  listaDeUsuarios: Usuario[];

  constructor(listaDeLivros: Livro[], listaDeUsuarios: Usuario[]) {
    this.listaDeLivros = listaDeLivros;
    this.listaDeUsuarios = listaDeUsuarios;
  }

  protected verificadorUsuario(usuario: Usuario): boolean {
    let verificador: boolean = false
    for (let usuarioCadastrado of this.listaDeUsuarios) {
      if (usuarioCadastrado.getNome() === usuario.getNome()) {
        verificador = true
      }
    }
    return verificador
  }

  protected verificadorLivro(livro: Livro): boolean {
    let verificador: boolean = false
    for (let livroCadastrado of this.listaDeLivros) {
      if (livroCadastrado.getTitulo() === livro.getTitulo()) {
        verificador = true
      }
    }
    return verificador
  }

  protected verificadorDisponibilidade(livro: Livro): boolean {
    let verificador: boolean = false
    for (let livroCadastrado of this.listaDeLivros) {
      if (livroCadastrado.getTitulo() === livro.getTitulo()) {
        if (livroCadastrado.getStatus() === LivroStatus.DISPONIVEL) {
          verificador = true
        }
      }
    }
    return verificador
  }

  consultaLivro(nomeLivro: string): string {
    let livroAchado: string = "Livro não encontrado.";
    for (let livro of this.listaDeLivros) {
      if (livro.getTitulo() === nomeLivro) {
        livroAchado = `Livro: ${livro.getTitulo()}: ${livro.getStatus()}`;
      }
    }
    return livroAchado;
  }

  listaDeLivrosDisponiveis(): string {
    let listaLivros: string = "Livros disponiveis para emprestimo: ";
    for (let livro of this.listaDeLivros) {
      if (livro.getStatus() === LivroStatus.DISPONIVEL) {
        listaLivros += `${livro.getTitulo()}, `;
      }
    }
    if (listaLivros === "Livros disponiveis para emprestimo: ") {
      return "Nenhum livro disponivel no momento.";
    } else return listaLivros;
  }

  listaDeLivrosEmprestados(): string {
    let listaLivros: string = "Lista de livros emprestados: ";
    for (let livro of this.listaDeLivros) {
      if (livro.getStatus() === LivroStatus.EMPRESTADO) {
        listaLivros += `${livro.getTitulo()}, `;
      }
    }
    if (listaLivros === "Lista de livros emprestados: ") {
      return "Nenhum livro emprestado no momento.";
    } else return listaLivros;
  }

  listaDeLivrosAtrasados(): string {
    let listaLivros: string = "Lista de livros atrasados: ";
    for (let livro of this.listaDeLivros) {
      if (livro.getStatus() === LivroStatus.ATRASADO) {
        listaLivros += `${livro.getTitulo()}, `;
      }
    }
    if (listaLivros === "Lista de livros atrasados: ") {
      return "Nenhum livro atrasado no momento.";
    } else return listaLivros;
  }

  listaDeLivrosPorGenero(genero: string): string {
    let listaLivros: string = `Livros do genero ${genero}: `;
    for (let livro of this.listaDeLivros) {
      for (let livroGenero of livro.getGenero()) {
        if (livroGenero === genero) {
          listaLivros += `${livro.getTitulo()}, `;
        }
      }
    }
    if (listaLivros === `Livros do genero ${genero}: `) {
      return `Nenhum livro do genero ${genero} encontrado.`;
    } else return listaLivros;
  }

  cadastroUsuario(usuario: Usuario): string {
    this.listaDeUsuarios.push(usuario);
    return "Usuario cadastrado com sucesso.";
  }

  emprestimo(usuario: Usuario, livro: Livro): string {
    if (this.verificadorUsuario(usuario)) {
      if (this.verificadorLivro(livro)) {
        if (this.verificadorDisponibilidade(livro)) {
          usuario.setLivrosEmprestados([...usuario.getLivrosEmprestados(), livro])
          usuario.setHistoricoEmprestimo([...usuario.getHistoricoEmprestimo(), livro])
          livro.setStatus(LivroStatus.EMPRESTADO)
          return "Emprestimo efetuado com sucesso"
        } return "Livro indisponivel para emprestimo"
      } return "Livro nao encontrado"
    } return "Usuario nao encontrado"
  }

  historicoUsuario(usuario: Usuario): string {
    let historico: string = `Historico de emprestimos do usuario ${usuario.getNome()}: `;

    if (this.verificadorUsuario(usuario)) {
      if (usuario.getHistoricoEmprestimo().length !== 0) {
        for (let livro of usuario.getHistoricoEmprestimo()) {
          historico += livro.getTitulo();
          return historico;
        }
      } return "Usuario ainda não locou nenhum livro.";
    } return "Usuario nao encontrado.";

  }

  reserva(usuario: Usuario, livro: Livro): string {
    if (this.verificadorUsuario(usuario)) {
      if (this.verificadorLivro(livro)) {
        usuario.setLivrosReservados([...usuario.getLivrosReservados(), livro])
        livro.setStatus(LivroStatus.RESERVADO);
        return "Livro reservado com sucesso";
      } return "Livro nao encontrado"
    } return "Usuario nao encontrado"
  }

  verificarMulta(usuario: Usuario): string {
    let multa: number = 0;
    if (this.verificadorUsuario(usuario)) {
      multa += usuario.getMulta();
    }
    return `Usuario: ${usuario.getNome()}, multa: ${multa}`;
  }
}
