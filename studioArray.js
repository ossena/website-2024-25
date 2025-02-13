//l'array è una struttura di dati semplice per memorizare più valori

let elencoFrutta = ["kiwi", "banane", "pere", "pesche", "mandarini" ];
console.log(elencoFrutta);
let array1 = [];

//dichiarazione di array 
let arrayVoti = [65,55,70,40,80]; 

console.log(arrayVoti[1]);

console.log(arrayVoti.length);

console.log(arrayVoti[arrayVoti.length-1]);

elencoFrutta.sort();
console.log(elencoFrutta);

console.log(elencoFrutta[0]);

console.log("La lunghezza di elencoFrutta é:"+ elencoFrutta.length);
console.log("La lunghezza di array1 é:"+ array1.length);

//per accedere all'ultimo elemento
let ultimoElementoFrutta = elencoFrutta[elencoFrutta.length - 1];

//push aggiunge un elemento all'array alla fine
elencoFrutta.push("cachi");
console.log(elencoFrutta);

console.log(ultimoElementoFrutta);

//toglie primo elemento (shift)
elencoFrutta.shift();
console.log(elencoFrutta);
//inserice elemento all inizio (unshift)
elencoFrutta.unshift("pompelmo");
console.log(elencoFrutta);
//toglie l'ultimo
elencoFrutta.pop();
console.log(elencoFrutta);

// /creare una funzione con nome a piacere alla quale passo 3 parametri
// function Esempio(a,b,c){
// 	return (a + b)/c};
// console.log(Esempio(10,40,2));


let lettere = ["C","I","A","O"];

let paroleJoin = lettere.join("")
console.log(paroleJoin);//stampa CIAO


let ordine = ["Z","F","K","A"];
console.log(ordine);

ordine.sort();
console.log(ordine);

let word1 = "roma";
let word2 = "amor";
//split fa il contrario di join
console.log(word1.split("").sort());
console.log(word2.split("").sort());
