import { lista } from "./array";
import { Magia, Personagem, Pessoa } from "./classes";
import { data } from "./datas";
import { concatArray, nomeFrutas, ola, printObj, soma } from "./funcoes";
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

const numArray = concatArray<number[]>([1,3], [3,6]);
console.log(numArray);

const stringArray = concatArray<string[]>(["a", "b"], ["c", "d"]);
console.log(stringArray);

// interface
let r: robo = {
    id: 1,
    nome: "px",
    sayHello: function (): string {
        return "oi"
    }
}

console.log(r);

// classes
let p = new Pessoa(1, "p");
console.log(p.sayHello());

const p2 = new Personagem("Bob", 10);
console.log(p2);
p2.attack();

const p3 = new Magia("Mago", 12, 100);
console.log(p3);
p3.attack();
