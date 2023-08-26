import { lista } from "./array";
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
    nome: "px"
}

console.log(r);