/* jshint esversion:6 */

const libreriaMoment = require('./node_modules/moment/min/moment-with-locales.js');

class Persona{
    constructor(person){
        const luogo = person.location;

        this.nome = person.name.first;
        this.cognome = person.name.last;
        this.DOB = person.dob;
        this.indirizzo = `${luogo.street}, ${luogo.city}, ${luogo.state}, ${luogo.postcode}`;
        
    }

    get fullName(){
        return `Nome: ${this.nome} Cognome: ${this.cognome}`;
    }

    get fullLocation(){
        return Persona.indirizzo;
    }

    get eta(){
        const moment = libreriaMoment(this.DOB).fromNow();
        return moment;

    }
    get coordinate() {
        return new Coordinate(45.65, 8.54);
    }

    set coordinate(value){
        this.latitudine = value;
    }

}

class Coordinate{
    constructor(lat,long){
        this._latitudine = lat;
        this._longitudine = long;
    }
    get latitudine(){
        return this._latitudine;
    }

    get longitudine(){
        return this._longitudine;
    }
}

module.exports ={
    Persona,
    Coordinate
};