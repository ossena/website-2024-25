function sonoAnagrammi(parola1,parola2){
    let parola1Clean = parola1.replace(/\s+/g, '').toLowerCase();
    let parola2Clean = parola2.replace(/\s+/g, '').toLowerCase();
    console.log(parola1Clean,parola2Clean);
};
p1 = "ciA u"
p2 = "Bell o"
sonoAnagrammi(p1,p2);

/* function sonoAnagrammi(parola1,parola2){
let p1 = "";
let p2 = "";
p1 = parola1;
p2 = parola2;
let lunghezzaParola1 = p1.length;
let lunghezzaParola2 = p2.length;
//confronto la lunghezza
    if (lunghezzaParola1 !== lunghezzaParola2){
        return false
    }
};
console.log(sonoAnagrammi("casa","arancia")); */