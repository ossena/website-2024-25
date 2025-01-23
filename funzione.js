//per dichiarare la funzione

function stampaNome(nome){

    console.log("Ciao " + nome);

}

//per chiamare la funzione
stampaNome("Alessandro");
stampaNome("Pinco");
stampaNome("Palla");

//funzione somma
function somma(a1,b1){
    let somma = a1+b1;
    console.log("Il risultato della somma è = " + somma);
}

somma(56,100);


//funzione moltiplicazione

function moltiplicazione(c,d){
    let moltiplicazione = c*d;
    console.log("il risultato della moltiplicazione è = " + moltiplicazione )
}
moltiplicazione(5,4);

//funzione divisione

function divisione(e,f){
    let divisione = e/f;
    console.log("il risultato della divisione è = " + divisione)
}
divisione(30,3);

//funzione sottrazione
function sottrazione(g,h){
    let sottrazione = g-h;
    console.log("il risultato della sottrazione è = " + sottrazione)
}
sottrazione(30,15)



//ritorno di un valore
function somma2(a,b){
    return a + b;
}
let risultatoSomma = somma2(34,56);
console.log("il risultato somma2 è = " + risultatoSomma);


//-----------funzione che verifica se il numero e pari-------------


function sePari(numnero){
    if(numnero % 2 === 0 ){
        console.log("il numero è pari");
    }else{
        console.log("il numero e dispari");
    }

}

sePari(4);


function test1(){
    alert("Questo è un test");
}

function divisione(a,b){
    let risultato = a / b;
    return risultato
}

let variabile1 = divisione();
console.log(variabile1);

function calcolo(a,b,funzDiCalcolo){

    return funzDiCalcolo(a,b);
}

console.log(calcolo(40,7,divisione));