"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var LivroStatus_1 = require("../enum/LivroStatus");
var Biblioteca = /** @class */ (function () {
    function Biblioteca(listaDeLivros, listaDeUsuarios) {
        this.listaDeLivros = listaDeLivros;
        this.listaDeUsuarios = listaDeUsuarios;
    }
    Biblioteca.prototype.verificadorUsuario = function (usuario) {
        var verificador = false;
        for (var _i = 0, _a = this.listaDeUsuarios; _i < _a.length; _i++) {
            var usuarioCadastrado = _a[_i];
            if (usuarioCadastrado.getNome() === usuario.getNome()) {
                verificador = true;
            }
        }
        return verificador;
    };
    Biblioteca.prototype.verificadorLivro = function (livro) {
        var verificador = false;
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livroCadastrado = _a[_i];
            if (livroCadastrado.getTitulo() === livro.getTitulo()) {
                verificador = true;
            }
        }
        return verificador;
    };
    Biblioteca.prototype.verificadorDisponibilidade = function (livro) {
        var verificador = false;
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livroCadastrado = _a[_i];
            if (livroCadastrado.getTitulo() === livro.getTitulo()) {
                if (livroCadastrado.getStatus() === LivroStatus_1.LivroStatus.DISPONIVEL) {
                    verificador = true;
                }
            }
        }
        return verificador;
    };
    Biblioteca.prototype.consultaLivro = function (nomeLivro) {
        var livroAchado = "Livro não encontrado.";
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.getTitulo() === nomeLivro) {
                livroAchado = "Livro: ".concat(livro.getTitulo(), ": ").concat(livro.getStatus());
            }
        }
        return livroAchado;
    };
    Biblioteca.prototype.listaDeLivrosDisponiveis = function () {
        var listaLivros = "Livros disponiveis para emprestimo: ";
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.getStatus() === LivroStatus_1.LivroStatus.DISPONIVEL) {
                listaLivros += "".concat(livro.getTitulo(), ", ");
            }
        }
        if (listaLivros === "Livros disponiveis para emprestimo: ") {
            return "Nenhum livro disponivel no momento.";
        }
        else
            return listaLivros;
    };
    Biblioteca.prototype.listaDeLivrosEmprestados = function () {
        var listaLivros = "Lista de livros emprestados: ";
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.getStatus() === LivroStatus_1.LivroStatus.EMPRESTADO) {
                listaLivros += "".concat(livro.getTitulo(), ", ");
            }
        }
        if (listaLivros === "Lista de livros emprestados: ") {
            return "Nenhum livro emprestado no momento.";
        }
        else
            return listaLivros;
    };
    Biblioteca.prototype.listaDeLivrosAtrasados = function () {
        var listaLivros = "Lista de livros atrasados: ";
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.getStatus() === LivroStatus_1.LivroStatus.ATRASADO) {
                listaLivros += "".concat(livro.getTitulo(), ", ");
            }
        }
        if (listaLivros === "Lista de livros atrasados: ") {
            return "Nenhum livro atrasado no momento.";
        }
        else
            return listaLivros;
    };
    Biblioteca.prototype.listaDeLivrosPorGenero = function (genero) {
        var listaLivros = "Livros do genero ".concat(genero, ": ");
        for (var _i = 0, _a = this.listaDeLivros; _i < _a.length; _i++) {
            var livro = _a[_i];
            for (var _b = 0, _c = livro.getGenero(); _b < _c.length; _b++) {
                var livroGenero = _c[_b];
                if (livroGenero === genero) {
                    listaLivros += "".concat(livro.getTitulo(), ", ");
                }
            }
        }
        if (listaLivros === "Livros do genero ".concat(genero, ": ")) {
            return "Nenhum livro do genero ".concat(genero, " encontrado.");
        }
        else
            return listaLivros;
    };
    Biblioteca.prototype.cadastroUsuario = function (usuario) {
        this.listaDeUsuarios.push(usuario);
        return "Usuario cadastrado com sucesso.";
    };
    Biblioteca.prototype.emprestimo = function (usuario, livro) {
        if (this.verificadorUsuario(usuario)) {
            if (this.verificadorLivro(livro)) {
                if (this.verificadorDisponibilidade(livro)) {
                    usuario.setLivrosEmprestados(__spreadArray(__spreadArray([], usuario.getLivrosEmprestados(), true), [livro], false));
                    usuario.setHistoricoEmprestimo(__spreadArray(__spreadArray([], usuario.getHistoricoEmprestimo(), true), [livro], false));
                    livro.setStatus(LivroStatus_1.LivroStatus.EMPRESTADO);
                    return "Emprestimo efetuado com sucesso";
                }
                return "Livro indisponivel para emprestimo";
            }
            return "Livro nao encontrado";
        }
        return "Usuario nao encontrado";
    };
    Biblioteca.prototype.historicoUsuario = function (usuario) {
        var historico = "Historico de emprestimos do usuario ".concat(usuario.getNome(), ": ");
        if (this.verificadorUsuario(usuario)) {
            if (usuario.getHistoricoEmprestimo().length !== 0) {
                for (var _i = 0, _a = usuario.getHistoricoEmprestimo(); _i < _a.length; _i++) {
                    var livro = _a[_i];
                    historico += livro.getTitulo();
                    return historico;
                }
            }
            return "Usuario ainda não locou nenhum livro.";
        }
        return "Usuario nao encontrado.";
    };
    Biblioteca.prototype.reserva = function (usuario, livro) {
        if (this.verificadorUsuario(usuario)) {
            if (this.verificadorLivro(livro)) {
                usuario.setLivrosReservados(__spreadArray(__spreadArray([], usuario.getLivrosReservados(), true), [livro], false));
                livro.setStatus(LivroStatus_1.LivroStatus.RESERVADO);
                return "Livro reservado com sucesso";
            }
            return "Livro nao encontrado";
        }
        return "Usuario nao encontrado";
    };
    Biblioteca.prototype.verificarMulta = function (usuario) {
        var multa = 0;
        if (this.verificadorUsuario(usuario)) {
            multa += usuario.getMulta();
        }
        return "Usuario: ".concat(usuario.getNome(), ", multa: ").concat(multa);
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
