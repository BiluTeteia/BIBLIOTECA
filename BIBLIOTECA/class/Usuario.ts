import { Livro } from "./Livro"

export class Usuario {
    private nome: string
    private cpf: string
    private livrosEmprestados: Livro[]
    private livrosReservados: Livro[]
    private historicoEmprestimo: Livro[]
    private multa: number

    constructor(nome: string, cpf: string, livrosEmprestados: Livro[], livrosReservados: Livro[], historicoEmprestimo: Livro[], multa: number) {
        this.nome = nome
        this.cpf = cpf
        this.livrosEmprestados = livrosEmprestados
        this.livrosReservados = livrosReservados
        this.historicoEmprestimo = historicoEmprestimo
        this.multa = multa
    }

    getNome(): string {
        return this.nome
    }
    getCpf(): string {
        return this.cpf
    }
    getLivrosEmprestados(): Livro[] {
        return this.livrosEmprestados
    }
    setLivrosEmprestados(value: Livro[]) {
        this.livrosEmprestados = value
    }
    getLivrosReservados(): Livro[] {
        return this.livrosReservados
    }
    setLivrosReservados(value: Livro[]) {
        this.livrosReservados = value
    }
    getHistoricoEmprestimo(): Livro[] {
        return this.historicoEmprestimo
    }
    setHistoricoEmprestimo(value: Livro[]) {
        this.historicoEmprestimo = value
    }
    getMulta(): number {
        return this.multa
    }
    setMulta(value: number) {
        this.multa = value
    }
}