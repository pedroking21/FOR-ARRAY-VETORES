/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
*/


let semana = new Array(`segunda-feira`, `terça-feira`, `quartas-feiras`, `quinta-feira`, `sexta-feira`, `sábado`, `domingo`);

let hobby = new Array(`jogar futebol`, `treinar`, `fazer academia`, `assistir futebol`, `igreja`, `resenhar`, `pião`);

console.log(`Eu gosto de começar minhas semanas com alguma atividade física, 
por isso na ${semana[0]} eu costumo ${hobby[0]}. Já de ${semana[1]} prefiro ${hobby[1]} para 
melhorar. Nas ${semana[2]}, pra fortalecer, gosto de ${hobby[2]}.
Para na ${semana[3]} ${hobby[3]}. Já na ${semana[4]} vou a ${hobby[4]}. 
Então aos ${semana[5]} gosto de ${hobby[5]} para descontrair e colocar a conversa
em dia. Para fechar a semana aos ${semana[6]} vou de ${hobby[6]}.`)