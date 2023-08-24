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

