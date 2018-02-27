/* jshint esversion:6 */

const fetch = require('node-fetch');
const urlRandomUserMe = 'https://randomuser.me/api';

const restituisciUrlNUtenti = (n) => {
     return`${urlRandomUserMe}?results=${n}`;
};

const servizioUser = fetch(urlRandomUserMe)
    .then((risposta) => risposta.json())
    .catch(function(error){
        console.log(error.message);
    });

const servizioUser50 = fetch(restituisciUrlNUtenti(50))
    .then((risposta) => risposta.json())
    .catch(function(error){
        console.log(error.message);
    });

module.exports = {
    servizioUser,
    servizioUser50
};