"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printObj(pessoa) {
    console.log(pessoa);
}
printObj({
    name: "Bruce", vulgo: "Batman"
});
// objetos
let produto = {
    name: "khaleesi",
    tipo: "mãe de dragões"
};
let meuProduto = {
    nome: "jaqueta",
    preco: 8.99,
    unidades: 12
};
// array
let lista = ["ameixa", "banana", "caju"];
let lista2 = ["goiaba", "limão"];
let infos = ["morango", 10, "mamão", 8];
lista.push("melancia");
// tuplas
let boletos = ["luz", 89.99, 12];
// datas
let data = new Date("2023-08-25 5:00");
console.log(data.toString());
function nomeFrutas(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return params;
    });
}
nomeFrutas("cacau").then((i) => console.log(i));
