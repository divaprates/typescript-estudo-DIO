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

export class Personagem {
    name: string;
    power: number;

    attack(): void {
        console.log("Ataque com ", this.power);
    }

    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }
}