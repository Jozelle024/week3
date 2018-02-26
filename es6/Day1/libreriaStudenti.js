/*jshint esversion: 6 */

const arrayMesi = ['gennaio','febrraio','marzo', 'aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

const arraySettimana = ['lunedi', 'martedi','mercoledi','giovedi','venerdi','sabato','domenica'];

const getMese = n =>{return arrayMesi[n];};
const getGiorno = g => {

    const indice = parseInt(n);
    const indiceIsNan = isNaN(indice);
    if(indiceIsNan){
        return `L'indice inserito non è un numero`;
    }else {
        if(indice > 0 && indice < 7){
            return arraySettimana[g];
        } else {
            return `L'indice inserito è sbagliato`;
        }
    }
};
    
const getMesi = () => {return arrayMesi;};
const getSettimane = () =>{return arraySettimana;};

module.exports = { // exports render this to be used outside
    getMese,
    getGiorno,
    getMesi,
    getSettimane
};