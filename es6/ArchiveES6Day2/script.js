/* jshint esversion: 6 */
const promesse = require('./libreriaPromesse.js');

const subTotale = 50;
const spedizione = 5;

const consumaPromessa = function(){
    promesse.scontoDopo19
    .then(promesse.consegnaGratuita)
    .then((spedizioneGratuita) => {
        const totale = spedizioneGratuita ? subTotale : (subTotale + spedizione);
        console.log(`Il conto totale è: ${totale}`);
    })
    .catch(() => {
        console.log('Sconto non applicabile');
    });
};

consumaPromessa();




