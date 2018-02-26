/*jshint esversion: 6 */

const arrayMesi = ['gennaio','febrraio','marzo', 'aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

const arraySettimana = ['lunedi', 'martedi','mercoledi','giovedi','venerdi','sabato','domenica'];
const arrayIndice = ['Il primo','Il secondo','Il terzo','Il quarto',' Il quinto','Il sesto',' Il settimo', 'L\'ottavo', 'Il nono', 'Il decimo', 'L\'undicesimo', 'Il dodicesimo'];
const getMese = n =>{return arrayMesi[n];};
const getGiorno = g => {

    const indice = parseInt(g);
    // const indiceIsNan = isNaN(indice);

    const result = {};

    if(isNaN(indice)){
        result.successo = false;
        result.messaggio =  "L'indice inserito non è un numero";
        return result;
        
    }else {
        if(indice > 0 && indice < 7){
            result.successo = true;
            result.messaggio = arraySettimana[g];
            return result;
        } else {
            result.successo = false;
            result.messaggio = `L'indice inserito è sbagliato`;
            return result;
        }
    }
};

const convertIndice = (i) => {return arrayIndice[i]};
    
const getMesi = () => {return arrayMesi;};
const getSettimane = () =>{return arraySettimana;};

module.exports = { // exports render this to be used outside
    getMese,
    getGiorno,
    getMesi,
    getSettimane,
    convertIndice
};