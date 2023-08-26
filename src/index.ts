type heroi = {
    name: string;
    vulgo: string;
}

function printObj(pessoa: heroi){
    console.log(pessoa);
}

printObj({
    name: "Bruce", vulgo: "Batman"
})

// objetos
let produto: object = {
    name: "khaleesi",
    tipo: "mãe de dragões"
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "jaqueta",
    preco: 8.99,
    unidades: 12
};