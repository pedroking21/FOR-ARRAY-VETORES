/*
4 – Faça um programa que dê entrada manual de 10 números armazene 
em um vetor, em seguida inverter a ordem de armazenamento em 
outro vetor, utilize laços de repetição para
fazer essa atividade.
Nome: Pedro Otávio Camolesi
*/

const teclado = require(`prompt-sync`)();
console.clear();

let entrada: number[] = new Array(10);

for (let i = 0; i < 10; i++) {
    entrada[i] = parseInt(teclado(`Digite um número: `));
}

let saida: number[] = new Array(10);

for (let i = 0; i < 10; i++) {
    saida[i] = entrada[9 - i];
}

for (let i = 0; i < 10; i++) {
    console.log(`Posição ${i}: ${saida[i]}`);
}