/* jshint esversion: 6 */
const libreriaFunzioni = require('./funzioni.js');

const consegnaGratuita = new Promise(
    function(resolve, reject){
        if(libreriaFunzioni.promozioneConsegna()){
            console.log('Sei nel resolve di consegna gratuita');
            resolve();
        } else{
            console.log('Sei nel reject di consegna gratuita');
            reject();
        }
    }
);


const promessa = new Promise(
    function(resolve, reject){
        if(libreriaFunzioni.applicaSconto()){
            //setTimeout(resolve(),2500);
            setTimeout(function(){
                resolve(libreriaFunzioni.calcolaSconto());
            }, 2500);
        } else{
            setTimeout(function(){
                reject();
            },3000);
        }
    }
);

module.exports = {
    consegnaGratuita,
    scontoDopo19: promessa
};