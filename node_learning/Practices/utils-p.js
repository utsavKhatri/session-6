// Adding the required Modules

import { EventEmitter } from 'events';
import { inherits } from 'util';


/* The Person class has a constructor that takes a name parameter. */
class Person {
    constructor(name) { 
    }
}


/* Making the Person class inherit the EventEmitter class. */
inherits(Person,EventEmitter);

var james = new Person('james');
var saif = new Person('saif');
var sampath = new Person('sampath');

/* Creating an array of objects. */
var People = [james,saif,sampath];

People.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + 'said this ' + msg );
    });
});

/* Emitting the event speak and passing the message 'This is james' to the event. */
james.emit('speak','This is james');