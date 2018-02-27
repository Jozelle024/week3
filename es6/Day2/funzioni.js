/*jshint esversion:6 */
const libreriaMoment = require('./node_modules/moment/min/moment-with-locales.js');

const applicaSconto = function(){
    const moment = new libreriaMoment();
    if(((moment.day()% 2 )!== 0)){
        return moment.hour() < 19;
    } else {
        return false;
    }
};

const calcolaSconto = function(){
    return Math.random() > 0.5? 10 : 5;
};

const promozioneConsegna = function(){
    return Math.random() > 0.5;
};

module.exports = {
    applicaSconto,
    calcolaSconto,
    promozioneConsegna
};