"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const datas_1 = require("./datas");
const funcoes_1 = require("./funcoes");
// array
array_1.lista.push("melancia");
// datas
console.log(datas_1.data.toString());
// funções
(0, funcoes_1.printObj)({
    name: "Bruce", vulgo: "Batman"
});
(0, funcoes_1.nomeFrutas)("cacau").then((i) => console.log(i));
let res = (0, funcoes_1.soma)(10, 4);
console.log(res);
console.log((0, funcoes_1.ola)("Fulano"));
// interface
let r = {
    id: 1,
    nome: "px"
};
console.log(r);
