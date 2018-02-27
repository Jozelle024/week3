/* jshint esversion:6 */
const funzioni = require('./funzioni.js');

const scontoDopo19 = new Promise(
    function(resolve, reject){
        if(funzioni.applicaSconto()){
            setTimeout( function(){
                resolve(sconto());
                },2000);
        } else{
            setTimeout( function(){
                reject();
                },2000);
        }
    }
);

const consegnaGratuita = new Promise(
    function(resolve,reject){
        if(funzioni.promozioneConsegna()){
            console.log('consegna gratuita resolve');
            resolve();
        } else {
            console.log('consegna gratuita reject');
            reject();
        }
    }
);

module.exports = {
    consegnaGratuita,
    scontoDopo19
};