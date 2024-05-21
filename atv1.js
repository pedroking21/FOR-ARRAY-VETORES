/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
*/
var semana = new Array("segunda-feira", "ter\u00E7a-feira", "quartas-feiras", "quinta-feira", "sexta-feira", "s\u00E1bado", "domingo");
var hobby = new Array("jogar futebol", "treinar", "fazer academia", "assistir futebol", "igreja", "resenhar", "pi\u00E3o");
console.log("Eu gosto de come\u00E7ar minhas semanas com alguma atividade f\u00EDsica, \npor isso na ".concat(semana[0], " eu costumo ").concat(hobby[0], ". J\u00E1 de ").concat(semana[1], " prefiro ").concat(hobby[1], " para \nmelhorar. Nas ").concat(semana[2], ", pra fortalecer, por isso gosto de ").concat(hobby[2], ".\nPara na ").concat(semana[3], " ").concat(hobby[3], ". J\u00E1 na ").concat(semana[4], " vou a ").concat(hobby[4], ". \nEnt\u00E3o aos ").concat(semana[5], " gosto de ").concat(hobby[5], " para descontrair e colocar a conversa\nem dia. Para fechar a semana aos ").concat(semana[6], " vou de ").concat(hobby[6], "."));
