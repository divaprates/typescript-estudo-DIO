"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    sayHello() {
        return "Olá";
    }
}
exports.Pessoa = Pessoa;
