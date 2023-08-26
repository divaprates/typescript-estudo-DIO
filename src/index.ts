import { lista } from "./array";
import { Pessoa } from "./classes";
import { data } from "./datas";
import { nomeFrutas, ola, printObj, soma } from "./funcoes";
import { robo } from "./interfaces";


// array
lista.push("melancia");

// datas
console.log(data.toString());

// funções
printObj({
    name: "Bruce", vulgo: "Batman"
})

nomeFrutas("cacau").then((i) => console.log(i));

let res:number = soma(10, 4);
console.log(res);

console.log(ola("Fulano"));

// interface
let r: robo = {
    id: 1,
    nome: "px",
    sayHello: function (): string {
        return "oi"
    }
}

console.log(r);

let p = new Pessoa(1, "p");
console.log(p.sayHello());