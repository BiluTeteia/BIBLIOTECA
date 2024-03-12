"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, genero, status) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.status = status;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getGenero = function () {
        return this.genero;
    };
    Livro.prototype.getStatus = function () {
        return this.status;
    };
    Livro.prototype.setStatus = function (value) {
        this.status = value;
    };
    return Livro;
}());
exports.Livro = Livro;
