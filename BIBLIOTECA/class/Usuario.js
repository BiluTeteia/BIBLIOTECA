"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, cpf, livrosEmprestados, livrosReservados, historicoEmprestimo, multa) {
        this.nome = nome;
        this.cpf = cpf;
        this.livrosEmprestados = livrosEmprestados;
        this.livrosReservados = livrosReservados;
        this.historicoEmprestimo = historicoEmprestimo;
        this.multa = multa;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getCpf = function () {
        return this.cpf;
    };
    Usuario.prototype.getLivrosEmprestados = function () {
        return this.livrosEmprestados;
    };
    Usuario.prototype.setLivrosEmprestados = function (value) {
        this.livrosEmprestados = value;
    };
    Usuario.prototype.getLivrosReservados = function () {
        return this.livrosReservados;
    };
    Usuario.prototype.setLivrosReservados = function (value) {
        this.livrosReservados = value;
    };
    Usuario.prototype.getHistoricoEmprestimo = function () {
        return this.historicoEmprestimo;
    };
    Usuario.prototype.setHistoricoEmprestimo = function (value) {
        this.historicoEmprestimo = value;
    };
    Usuario.prototype.getMulta = function () {
        return this.multa;
    };
    Usuario.prototype.setMulta = function (value) {
        this.multa = value;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
