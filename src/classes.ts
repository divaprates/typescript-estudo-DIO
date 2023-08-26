import { robo } from "./interfaces";

export class Pessoa implements robo {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    sayHello(): string {
        return "Olá";
    }

    
}