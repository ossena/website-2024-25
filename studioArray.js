
//l'array è una struttura di dati semplice per memorizare più valori

let elencoFrutta = ["kiwi", "banane", "pere", "pesche", "mandarini" ];
console.log(elencoFrutta);
let array1 = [];

elencoFrutta.sort();
console.log(elencoFrutta);

console.log(elencoFrutta[0]);

console.log("La lunghezza di elencoFrutta é:"+ elencoFrutta.length);
console.log("La lunghezza di array1 é:"+ array1.length);

//per accedere all'ultimo elemento
let ultimoElementoFrutta = elencoFrutta[elencoFrutta.length - 1];

//push aggiunge un elemento all'array
elencoFrutta.push("cachi");
console.log(elencoFrutta);

console.log(ultimoElementoFrutta);


//toglie primo elemento
elencoFrutta.shift();
console.log(elencoFrutta);
//inserice elemento all inizio unshift
elencoFrutta.unshift("pompelmo");
console.log(elencoFrutta);
//toglie l'ultimo
elencoFrutta.pop();
console.log(elencoFrutta)