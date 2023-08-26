"use strict";
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
