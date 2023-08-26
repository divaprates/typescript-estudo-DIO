"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = exports.Pessoa = void 0;
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
class Personagem {
    attack() {
        console.log("Ataque com ", this.power);
    }
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}
exports.Personagem = Personagem;
