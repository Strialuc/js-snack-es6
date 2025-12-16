/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


//creo l array di sqadre di calcio 

const squadreCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Bologna", puntiFatti: 0, falliSubiti: 0 }
];



// funzione per numeri random 

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ciclo for per far generare randomicamente punti e falli fatti 

for (let i = 0; i< squadreCalcio.length; i++) {
  
    squadreCalcio[i].puntiFatti = numeroRandom(0, 30);    
    squadreCalcio[i].falliSubiti = numeroRandom(0, 100);    
  };


console.log(squadreCalcio);

// nuovo array con solo nomi e falli

const nuovoArray = [];

for (let i = 0; i < squadreCalcio.length; i++) {
    
  const squadra = squadreCalcio[i];

  nuovoArray.push({
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti

  });
}

console.log(nuovoArray);