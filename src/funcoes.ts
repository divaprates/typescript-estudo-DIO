import { heroi } from "./obj";

export function soma(x: number, y: number) {
    return x + y;
}

export function ola(nome: string): string {
    return "Ola," + nome;
}

export function printObj(pessoa: heroi){
    console.log(pessoa);
}

export async function nomeFrutas(params:string): Promise<string> {
    return params;
}

export function concatArray<T>(...items: T[]): T[] {
    return new Array().concat(...items);
}