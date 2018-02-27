/* jshint esversion:6 */

const richiestaUtente = require('./servizioRandomUserMe.js');
const personaClass = require('./persona.js');

const dati = richiestaUtente.servizioUser50
    .then(function(data){
        //console.log(data);
        //const {name,location} = data.results[0];
        //console.log(location);
        const persone = data.results;
        const maschi = persone.filter(persona => persona.gender === 'male');
        const femmine = persone.filter(persona => persona.gender === 'female');
        
        console.log(`Il numero di maschi è ${maschi.length}`);
        console.log(`Il numero di femmine è ${femmine.length}`);

        const primoOlandese = persone.find(persona => persona.nat ==='NL');
        console.log(`Il Primo Olandese Nome: ${primoOlandese.name.first} Cognome: ${primoOlandese.name.last}`);
        
        
        const olandesiOrdinati = maschi.sort((a,b) => (a.name.first > b.name.first) && (a.name.last > b.name.last) ? 1 : -1);
        /*
        for(const olandese of olandesiOrdinati){ // rename the constant , creates a loop interating over iterable objects
            console.log(`Nome: ${olandese.name.first} Cognome: ${olandese.name.last}`);
        }
        */
        const primo = new personaClass.Persona(olandesiOrdinati[0]);
        console.log(primo.fullName);
        console.log(primo.fullLocation);

        const c = new personaClass.Coordinate(45.6434,6.453);
        console.log(c.latitudine);

        console.log(primo.coordinate);

});



