const kilometersAsString = prompt("inserisci la distanza che vuoi percorrere (in kilometri): ");
const kilometersAsInt = parseInt(kilometersAsString);

const ageAsString = prompt("inserisci la tua età: ");
const ageAsInt = parseInt(ageAsString);


const euroPerKilometer = 0.21;

let prezzoSenzaSconto = kilometersAsInt * euroPerKilometer;
let prezzoScontato;

if (ageAsInt < 18) {
    prezzoScontato = (prezzoSenzaSconto * 0.8).toFixed(2);
} else if (ageAsInt > 65) {
    prezzoScontato = (prezzoSenzaSconto * 0.6).toFixed(2);
} else {
    prezzoScontato = prezzoSenzaSconto.toFixed(2);
}

console.log(`Il prezzo del biglietto è di ${prezzoScontato}\u20AC`);