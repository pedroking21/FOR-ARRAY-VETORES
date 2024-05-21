/*
6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR.
Nome: Pedro Otávio Camolesi
*/

const teclado = require(`prompt-sync`)();
console.clear();

for (let r = 1000; r <= 2000; r++) {
    if (r % 11 == 2) {
        console.log(`O Resto é ${r}`);
    }
}