//Seleziona il bottone di aggiunta

const bottoneAggiungi = document.getElementById('bottoneAggiungi');
//const bottoneTogli = document.getElementById('bottoneTogli');
const lista = document.getElementById('miaLista');
const bottoneSvuota = document.getElementById('svuota');
const bottoneSalva = document.getElementById('saveButton');


console.log(lista.children.length);


bottoneAggiungi.addEventListener('click', function () {
    
    const nuovoElemento = document.createElement('li');
    const userInput = prompt("inserisci un testo");
    const iconaCestino = document.createElement('span');



    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = " 🗑️"
    iconaCestino.style.cursor = "pointer";

    nuovoElemento.appendChild(iconaCestino);
    lista.appendChild(nuovoElemento);

    iconaCestino.addEventListener('click',function(){
        nuovoElemento.remove();

    })
});

bottoneSvuota.addEventListener('click', function (){
    const confermaCanc = confirm("Sei sicuro di voler svuotare la lista?");
if (confermaCanc) {
    if (lista.children.length > 0) {
        lista.innerHTML = '';
     }
}


});

function controllaSeListaVuota(){
   if (lista.children.length === 0) {
    const messaggioVuota = document.createElement("li");
    messaggioVuota.textContent = "La lista è vuota";
    messaggioVuota.id = 'messaggioVuota';
    lista.appendChild(messaggioVuota);
   } else {
        const messaggioVuota = document.getElementById
        if (messaggioVuota){
            messaggioVuota.remove(); //Rimuove il messaggio
        }
   }
}



function salvaLista(){
    const elementiLista = []; //array che incorpora gli elementi <li>

    //itera sugli elementi della lista 
    Array.from(lista.children).forEach((elemento)=>{
        if(elemento.id !== "messaggioVuota"){
            elementiLista.push(elemento.textContent.replace('🗑️', '')).trim();
        }
    })

    if(elementiLista.length === 0){
        alert("La lista è vuota");
    }

    const jsonData = JSON.stringify(elementiLista, null, 2); //formattazione a 2 spazzi
    const blob = new Blob([jsonData],{ type: 'application/json'});


}


bottoneSalva.addEventListener('click', salvaLista);


controllaSeListaVuota();