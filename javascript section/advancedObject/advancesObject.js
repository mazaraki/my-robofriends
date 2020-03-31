//reference type 
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 === object2 // true, object 1 & 2 point to the same object. when an object is created, we are storing just a reference, and adress, where we are storing the values.
object1 === object3 // false
[] === [] // false. arrays are objects.

/**
 Symbols, strings, booleans, nulls, undefined, numbers are all passed by value. called primitive types */
 /** objects are passed by reference. called reference types. an object is not defined by the programming language.
 */


// context vs scope
// this is the object environment that we are right now. ie if in console, this === window. layman's: if obj.prop||obj.function, 'this' is the left part of the dot, here obj

let a = ()=> console.log(this); // 'this' refers to the window's object. we still do not have an object 

const obj4 = { 
	a: function(){
		console.log(this);
	}
};

// instantiation
// when you make a copy of an object and use the code
// you make instances

// we use 'this', so when we create a player, we can access the name and type property
class Player {
	constructor(name='boo', type='Rogue'){
		console.log(this);
		this.name = name;
		this.type = type;
	}

	introduce(){
		console.log(`Hello world! I am ${this.name} and my type is ${this.type}.`);
	}
}

class Wizard extends Player {
	constructor(name, type){ // everytime we extend, we need to call the constructor function
		super(name, type); //overrides the Player's class' constructor. now we can have access to the parametres 
		console.log('wizard', this);
	}

	play(){
		console.log(`I am a ${this.type}.`);
	}

};


const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Edward', 'Full Metal Alchemist');
const me = new Wizard();


// classical (before ES6) inheritance
var Player = function(name='boo', type='rogue'){
	this.name = name;
	this.type = type;
}


Player.prototype.introduce = function(){
	console.log(`Hi I am ${this.name} and I am a ${this.type}.`);
}

var wizard1 = new Player('Shelly', 'Healer');
var wizard2 = new Player('Edward', 'Full Metal Alchemist');

wizard1.play = function(){
	console.log(`I am a ${this.type}.`);
}

wizard2.play = function(){
	console.log(`I am a ${this.type}.`);
}