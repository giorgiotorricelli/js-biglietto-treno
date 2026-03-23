let kilometersAsString;

while (true) {
    kilometersAsString = prompt("inserisci la distanza che vuoi percorrere (in kilometri): ");
    let km = parseInt(kilometersAsString);

    if (km < 5 || isNaN(km)) {
        console.log("La distanza minima per viaggio è di 5km");
    } else {
        break;
    }
}

const kilometersAsInt = parseInt(kilometersAsString);

let ageAsString

while (true) {
    ageAsString = prompt("inserisci la tua età: ");
    let age = parseInt(ageAsString);

    if (age <= 0 || isNaN(age)) {
        console.log("Inserisci un età valida");
    } else if (age < 10){
        console.log("L'età minima per viaggiare è 10 anni");
    } else {
        break;
    }
}

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