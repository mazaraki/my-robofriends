// Primitives: pass by value. Immutable. in order to change them, we need to remove the primitive type from memory 
// or pass them to another ie var s1 = s2.substring(...)
// Primitives: Number, String, boolean, null, undefined, Symbol
var a = 5, b = a; // we copy the primitive value 5 to b, much like b = 5, and we put it into a new memory space in our machine. a and b do not have any connection.
b++;
console.log(a, b); // 5, 6

// Objects: pass by reference. Objects include arrays, functions etc
// we do not care about the value. we pass a reference to the stored object in memory
let obj1 = { name: 'boo', password: '123' };
let obj2 = obj1; // we point to the same place in the memorey heap. we DO NOT clone the object and we 
				 // save memory space by referencing one location instead of loading the memory heap
obj2.password = '456';
console.log(obj1, obj2); // passwrord to both obj will be '456'

var c = [1,3,4,3,24,5];
var d = c;
d.push(11111);
console.log(c, d) // [1,3,4,3,24,5, 11111], [1,3,4,3,24,5, 11111]
// in case we think that this may happen, we create a new array
var e = [].concat(c);
e.push(222);
console.log(c, e); //[1,3,4,3,24,5,11111] [1,3,4,3,24,5, 11111, 222]

let obj = {a: 'a', b: 'b', c: 'c', d: {deep: 'try and copy me'}};
let same = obj; // it points to the same location in memory
let other = Object.assign({}, obj);// copies the obj to another location
// we can also use the spread operator to clone
let other2 = {...obj};
obj.c = 5;
console.log(obj, same, other, other2); // {a: 'a', b: 'b', c: 5 } {a: 'a', b: 'b', c: 5 } {a: 'a', b: 'b', c: 'c'} 
obj.d.deep = 'oh no'
console.log(obj, same, other, other2); // each obj is passed by reference, even if it is inside another object. 
// { a: "a", b: "b", c: "c", d: {deep: "oh no"} }, { a: "a", b: "b", c: "c", d: {deep: "oh no"} }, 
// { a: "a", b: "b", c: "c", d: {deep: "oh no"} }, { a: "a", b: "b", c: "c", d: {deep: "oh no"} }
// -> due to 'Shallow clone': it cloned the first level, ie the memory address of the source object.
// If inside is another memory address (pointer) to another object, this never changes and it still points to the initial address

// -> Deep cloning
let superClone = JSON.parse(JSON.stringify(obj));
// Fais attention! It may affect the performance if source object is huge
obj.d.deep = 'goto initial';
console.log(superClone);