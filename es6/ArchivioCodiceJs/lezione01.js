/*jshint esversion: 6 */
// Let

// for (var i = 0; i < 5; i++) { setTimeout(function () {
//         console.log(i);
//     },1000);
// }

// for (let j = 0; j < 5; j++) { setTimeout(function () {
//     console.log(j);
//     },1000);
// }

// var vero = true;
// if(vero) {
//     var esempio = 'a';
// }

// let vero = true;
// if(vero) {
//     let esempio = 'a';
// }

// console.log(esempio);

// let read, write;
// {
//     let data = {};

//     write = function(chiave,valore){
//         data[chiave] = valore;
//     };

//     read = function(key) {
//         return data[key];
//     };
// }
// write('ES6', 'Benvenuti in ES6');
// let messaggio = read('ES6');
// console.log(messaggio);
// console.log(data);

// HOISTING

// stampaNome('Mario');

// function stampaNome(nome){
//     console.log(nome);
// }

// let condizione = true;
// if(condizione) {
//     console.log(pippo);
//     let pippo = 2;
// }

// let num = 0;
// function getNum() {
//     if(!num) {
//         // lo scope della num interna inizia qui
//         let num = 1;
//         // lo scope della num interna finisce qui
//     }
//     return num;
// }
// console.log(getNum());

// const a = {};
// a.nome = 'Mario';
// a.cognome = 'Rossi';
// a.nome = 'Maria';
// console.log(a.nome);

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}



const a = 'abc';
const b = a.padStart(10);
const c = a.padEnd(10);
console.log(b);
console.log(c);

// Template literals
// const numero = 5;
// const interpolata = `Hai ${numero} elementi nel carrello`;
// const senzatemplate = 'Hai ' + numero + ' elementi nel carrello';


// const multilinea = `linea 1
//                     linea 2`;
// console.log(multilinea);


// function creaMappa(options) {
//     const opzioniDefault = {
//         width: 900,
//         height: 500,
//         coordinates: [45.464211, 9.191383]
//     };
//     Object.keys(opzioniDefault).forEach( function(key){
//         if(!(key in options)){
//             options[key] = opzioniDefault[key];
//         }
//     });
//     // etc etc etc etc
// }

// function creaMappa(options) {
//     const opzioniDefault = {
//         width: 900,
//         height: 500,
//         coordinates: [45.464211, 9.191383]
//     };
//     options = Object.assign(opzioniDefault, options);
//     // etc etc etc etc
// }

// let a = {x: 1, y: 2, z: 3};
// let b = {x: 5, y: 6};
// let c = {x: 12};
// Object.assign(a,b,c);
// console.log(a);

function creaAstronaveBase(){
    return {
        fly: function() {
            // implementa fly
        },
        shoot: function() {
            // implementa shoot
        },
        destroy: function() {
            // implementa destroy
        }
    };
}

function creaAstronaveComplessa() {
    let astronave = creaAstronaveBase();
    Object.assign(astronave, {
        bomb: function() {
            // implementazione di bob
        }
    });
    return astronave;
}

var persona = {
    gender: "male",
    name: {
        "title": "mr",
        "first": "romain",
        "last": "hoogmoed"
      },
    location: {
        "street": "1861 jan pieterszoon coenstraat",
        "city": "maasdriel",
        "state": "zeeland",
        "postcode": 69217
      },
    email: "romain.hoogmoed@example.com",
    login: {
        "username": "lazyduck408",
        "password": "jokers",
        "salt": "UGtRFz4N",
        "md5": "6d83a8c084731ee73eb5f9398b923183",
        "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
        "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
      },
      dob: "1983-07-14 07:29:45",
      registered: "2010-09-24 02:10:42",
      phone: "(656)-976-4980",
      cell: "(065)-247-9303",
      id: {
        "name": "BSN",
        "value": "04242023"
      },
      picture: {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      nat: "NL"
};

// const {location, name, gender, email, login} = persona;
// console.log(location);

// const somma = function (a,b) {
//     return a + b;
// };

// const somma = (a,b) => a + b;

// function Person() {
//     // Il costruttore Person() definisce this come un'istanza di se stesso
//     let that = this;
//     that.age = 0;

//     setInterval( function growUp() {
//         // la funzione growUp()  definisce this
//         // come oggetto globale, differente dal this
//         // definito dal costruttore Person()
//         that.age++;
//         console.log(that.age);
//     }, 1000);
// }
// var p = new Person();

// function Person() {
//     this.age = 0;
//     setInterval( () => {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }
// var p = new Person();

// const simple = a => a > 15 ? 15 : a; 
// console.log(simple(16)); // 15
// console.log(simple(10)); // 10

// const max = (a, b) => a > b ? a : b;
// console.log(max(10,100));






