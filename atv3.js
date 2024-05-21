/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Pedro Otávio Camolesi
*/
console.clear();
var teclado = require("prompt-sync")();
var maior = 0;
var vetorMaior = new Array(10);
for (var x = 0; x <= 10; x++) {
    vetorMaior[x] = parseInt(teclado("Digite os n\u00FAmeros ".concat(x, ": ")));
    if (vetorMaior[x] > maior) {
        maior = vetorMaior[x];
    }
}
console.log(maior);
