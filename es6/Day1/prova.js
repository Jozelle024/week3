/*jshint esversion: 6 */

for(var i = 0; i < 5; i ++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

for(let j = 0; j < 5; j++){
    setTimeout(function(){
        console.log(j);
    }, 1000);
}

let vero = true;
if(vero) {
    let esempio = 'a';
}
//console.log(esempio); //generate error because esempio is declared inside the block

let read, write;
{
    let data = {};

    write = function(chiave,valore){
        data[chiave] = valore;
    };

    read = function(key){
        return data [key];
    };
}

write('ES6', 'Benvenuti in ES6');
let messaggio = read('ES6'); 
console.log(messaggio);
//console.log(data); // generate error because data is declared inside the block {}

let num = 10;
function getNum(){
    if(!num){
        let num = 1;
    }
    return num;
}

console.log(getNum());

const a = 5; 
console.log(a); 
// a += 6;// generate error because const is not editable


// backtick `` template literals interpolation
const numero = 5;
const interpolata = `hai ${numero} elementi nel carrello`; // backtick alt +9,  - template literals
const senzatemplate = 'hai ' + numero + ' elementi nel carrello'; 

// multilinea
const multilinea = `linea 1
                    linea 2`;
console.log(multilinea);

// tagged template literal - i18n - npm package that translates

function creaMappa(options){
    const opzioniDefault = {
        width: 900,
        height: 500,
        coordinates: [45.464211, 9.191383]
    };
    options = Object.assign(opzioniDefault,options);
}

creaMappa();

let b = {x: 1, y:2, z:3};
let c = {x: 5, y:6};
let d = {x: 12};
Object.assign(b,c,d); // copy to the first param the properties and values of second param and third
console.log(b.x); // stampa x = 12

function creaAstronaveBase(){
    return {
        fly: function(){

        },
        shoot: function(){

        },
        destroy: function(){

        }
    };
}

function creaAstronaveComplessa(){
    let astronave = creaAstronaveBase();
    Object.assign(astronave, {
        bomb: function(){
            //implementazione di bomb
        }
    });
    return astronave;
}

// arrow function
const somma = function(a,b){
    return a + b;
};

const sommaArrow = (a,b) => a + b;
// arrow function