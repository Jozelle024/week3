/*jshint esversion: 6 */
const libreria = require('./libreria.js');
const area = libreria.area(4);
console.log(`L'area è ${area}`);
const superficie = libreria.circonferenza(6);
console.log(`La superficie è ${superficie}`);



const libreriaDate = require('./libreria2.js');
const moment = require('./node_modules/moment/min/moment.min.js');
// const area = libreria.area(4);
// console.log(`L'area è ${area}`);
// const superficie = libreria.circonferenza(6);
console.log(`La superficie è ${superficie}`);
const d = libreriaDate.getDay(0);
console.log(`Requested day is ${d}`);
const oggi = moment();
console.log(`${oggi.format('DD MM YYYY')}`);
