/*jshint esversion: 6 */
//const libreriaMomentIt = require('./node_modules/moment/locale/it.js');
const libreriaMoment = require('./node_modules/moment/min/moment-with-locales.min.js');


const arrayMesi = ['gennaio', 'febbraio', 'marzo',
'aprile', 'maggio', 'giugno', 'luglio', 'agosto',
'settembre', 'ottobre', 'novembre', 'dicembre'];

const arraySettimana = ['lunedì', 'martedì', 'mercoledì',
'giovedì', 'venerdì', 'sabato', 'domenica'];

const arrayIndice = ['Il primo', 'Il secondo', 'Il terzo', 'Il quarto', 
'Il quinto', 'Il sesto', 'Il settimo', 'L\'ottavo', 'Il nono', 'Il decimo',
'L\'undicesimo', 'Il dodicesimo'];

const getMese = (n) => { 
    return libreriaMoment().locale('it').month(n).format('MMMM');
};  
const getGiorno = (n) => { 
    const result = {};
    if (isNaN(parseInt(n))) {
        result.successo = false;
        result.messaggio = "L'indice inserito non è un numero";
    } else {
        if (parseInt(n) >= 0 && parseInt(n) < 7) {
            result.successo = true;
            //result.messaggio = arraySettimana[n];
            result.messaggio = libreriaMoment().locale('it').day((n + 1)%7).format('dddd');
        } else {
            result.successo = false;
            result.messaggio = "L'indice inserito non è corretto";  
        }
    }
    return result;
};

const convertiIndice = (i) => { return arrayIndice[i]; }; 
const getMesi = () => { return arrayMesi; };
const getSettimana = () => { return arraySettimana; };

module.exports = {
    getMese,
    getGiorno,
    getMesi,
    getSettimana,
    convertiIndice
};