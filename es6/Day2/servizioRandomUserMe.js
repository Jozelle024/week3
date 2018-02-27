/* jshint esversion:6 */

const fetch = require('node-fetch');
const urlRandomUserMe = 'https://randomuser.me/api?results=50';

const servizioUser = fetch(urlRandomUserMe)
    .then((resp) => resp.json())
    .then( function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error.message);
    });

module.exports = {

};