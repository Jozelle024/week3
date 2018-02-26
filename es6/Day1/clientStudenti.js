/*jshint esversion: 6 */
const libreria = require('./libreriaStudenti.js');
const moment = require('./node_modules/moment/min/moment.min.js');

const indice = 2;
const indiceConvertito = libreria.convertIndice(indice);
const giorno =  libreria.getGiorno(indice);


if(!giorno.messaggio){
    console.log(giorno.messaggio);
} else {
    console.log(`Il ${indiceConvertito} giorno della settimana è ${giorno.messaggio}`);
}

