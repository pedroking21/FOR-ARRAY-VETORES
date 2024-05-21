/*
5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Nome: Pedro Otávio Camolesi
*/

const teclado = require(`prompt-sync`)();
console.clear();

let vetor: number [] = new Array (10);
let crescente = 0

for (let x = 1; x <= 10; x++){
    vetor[x] = parseInt(teclado(`Digite os números ${x}: `));
    for (let y = 1; y <= 10; y++){
        if (vetor[x] < vetor[y]){
        crescente = vetor[x];
        vetor[x] = vetor[y];
        vetor[y] = crescente;
    }
    }
}

for (let x = 1; x <= 10; x++){
    console.log(`Em ordem crescente ${vetor[x]}`);
}