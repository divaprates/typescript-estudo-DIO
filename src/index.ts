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

// array
let lista: string[] = ["ameixa", "banana", "caju"];
let lista2: Array<string> = ["goiaba", "limão"];
let infos: (string | number)[] = ["morango", 10, "mamão", 8];
lista.push("melancia");

// tuplas
let boletos: [string, number, number] = ["luz", 89.99, 12];

// datas
let data: Date = new Date("2023-08-25 5:00");
console.log(data.toString());

async function nomeFrutas(params:string): Promise<string> {
    return params;
}

nomeFrutas("cacau").then((i) => console.log(i));

