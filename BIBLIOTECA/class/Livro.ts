import { LivroGenero } from "../enum/LivroGenero";
import { LivroStatus } from "../enum/LivroStatus";

export class Livro {
    private titulo: string
    private autor: string
    private genero: LivroGenero[]
    private status: LivroStatus

    constructor(titulo: string, autor: string, genero: LivroGenero[], status: LivroStatus) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.status = status
    }

    getTitulo(): string {
        return this.titulo
    }
    getAutor(): string {
        return this.autor
    }
    getGenero(): LivroGenero[] {
        return this.genero
    }
    getStatus(): LivroStatus {
        return this.status
    }
    setStatus(value: LivroStatus) {
        this.status = value
    }
}