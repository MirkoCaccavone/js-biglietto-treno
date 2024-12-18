// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.


// INPUT
// indicare il numero di km da percorrere
let distanzaViaggio = parseInt(prompt("inserisci numero di km"));

// indicare l'età
let etaUtente = parseInt(prompt("inserisci la tua età"));
console.log("km",distanzaViaggio , "età",etaUtente);

// FUNZIONE
// calcolare il prezzo del biglietto in base ai km
let prezzoIntero = distanzaViaggio * 0.21;
console.log("Il prezzo del biglietto senza sconto è: ", prezzoIntero);

// calcolare lo sconto

if (etaUtente < 18){
    prezzoIntero = prezzoIntero * 0.80;

} else if (etaUtente >= 65){
    prezzoIntero = prezzoIntero * 0.60;

}else{
    prezzoIntero
}

// OUTPUT
// messaggio con prezzo finale
console.log("il prezzo finale è di: ", prezzoIntero.toFixed(2));
