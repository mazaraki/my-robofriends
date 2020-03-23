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
class Player {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
}