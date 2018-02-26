/*jshint esversion: 6 */
const libreria = require('./libreriaStudenti.js');
const moment = require('./node_modules/moment/min/moment.min.js');
const momentIt = require('./node_modules/moment/locale/it.js');

const indiceGiorno = 0;
const indiceMese = 5;
const indiceConvertito = libreria.convertIndice(indiceGiorno);
const giorno =  libreria.getGiorno(indiceGiorno);
const mese = libreria.getMese(indiceMese);


if(!giorno.successo){
    console.log(giorno.messaggio);
} else {
    console.log(`${indiceConvertito} giorno della settimana è ${giorno.messaggio}`);
}

console.log(mese);

