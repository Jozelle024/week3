/*jshint esversion:6 */

const promesse = require('./libreriaPromesse.js');

const subTotale = 50;
const spedizione = 5;


const consumaPromessa = function(){
    promesse.scontoDopo19
    .then(promesse.consegnaGratuita)
    .then((spedizioneGratuita) =>{
        // if spedizione gratuita then totale = subtotale, else totale = subtotale + spedizione
        const totale = spedizioneGratuita ? subtotale:(subtotale + spedizione); 
        console.log(`Ìl conto totale è ${totale}`);
    })
    .catch(() =>{
        console.log('Sconto non applicabile');
    });
};

consumaPromessa();