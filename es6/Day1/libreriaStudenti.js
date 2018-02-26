/*jshint esversion: 6 */

const arrayMesi = ['gennaio','febrraio','marzo', 'aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

const arraySettimana = ['lunedi', 'martedi','mercoledi','giovedi','venerdi','sabato','domenica'];

const getMese = n =>{return arrayMesi[n];};
const getGiorno = g => {return arraySettimana[g];};
const getMesi = () => {return arrayMesi;};
const getSettimane = () =>{return arraySettimana;};

module.exports = { // exports render this to be used outside
    getMese,
    getGiorno,
    getMesi,
    getSettimane
};