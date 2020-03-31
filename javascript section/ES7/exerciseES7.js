// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John') //false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let a = [];
dragons.forEach(item => {
	if(item.includes('John'))
		a.push(item)
});
return a;


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
let pow100 = (xn) => (xn**100n);
pow100(2n);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
let pow100 = (xn) => (xn**1000n);
pow100(2n);
