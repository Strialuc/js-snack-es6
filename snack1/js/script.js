/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/


// richiamo l'id dell elemento presente in html 

const titolo = document.getElementById("bicicletta")


// creo l' array bicicletta 

const biciclette = [];

// funzione per un numero random 

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ciclo for  per inserire peso delle biciclette

for (let i = 0; i < 10; i++) {
  const bicicletta = {
    nome: (i),
    peso: numeroRandom(100, 800),    
  };

  biciclette.push(bicicletta);
}

console.log(biciclette);

// ciclo for per trovare il peso minore 

let biciclettaLeggera = biciclette[0];

console.log(biciclettaLeggera);

for (let index = 0; index < biciclette.length; index++) {

    if (biciclette[index].peso < biciclettaLeggera.peso) {

        biciclettaLeggera = biciclette[index]
    }
}

console.log(biciclettaLeggera);

titolo.innerText = "La bicicletta più leggera è " + biciclettaLeggera.nome + " che pesa " + biciclettaLeggera.peso;


