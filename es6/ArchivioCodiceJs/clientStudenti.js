/*jshint esversion: 6 */
const libreria = require('./libreriaStudenti.js');
const libreriaMoment = require('./node_modules/moment/min/moment.min.js');

const indice = 6;
const indiceMese = 8;
const indiceConv = libreria.convertiIndice(indice);
const giorno = libreria.getGiorno(indice);
if (!giorno.successo) {
    console.log(giorno.messaggio);
} else {
    console.log(`${indiceConv} giorno della settimana è ${giorno.messaggio}`);
}

console.log(libreria.getMese(indiceMese));
