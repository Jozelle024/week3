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