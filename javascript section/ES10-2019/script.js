let arr = [1,[2,3],[4,5]];
arr.flat(); // [1,2,3,4,5] 
// flattens one level
let arr2 = [1,2,[3,4,[5]]];
arr2.flat(); // [1, 2, 3, 4, Array(1)], like [1,2,3,4,[5]]
// -> equals to arr.flat(1);
//buut... we can tell how many levels to flatten
arr2.flat(2);

let arr3 = [1,2,[[[[3]]]],[4,5]];
// just a cheat
arr3.flat(50);

//clean the data
let users = ['boo', 'niki',,,,,'dimitra'];
users.flat();

let arr3_1 = arr3.flatMap(creature => 
	creature + ' beasts');
// ["1 beasts", "2 beasts", "3 beasts", "4,5 beasts"]

let uEmail1 = '    dn@gmail.com';
let uEmail2 ='niki@me.gr         ';
uEmail1.trimStart();
uEmail2.trimEnd();
// same as uEmail1.trim() or uEmail2.trim();

let userProfiles = [
	['commanderTom', 23], 
	['derekZoolander',40],
	['hansel', 18]
];

let obj =Object.fromEntries(userProfiles);
Object.entries(obj); // exact opposite operation

// try catch update

try{
	4 + 5 + true + boo;
} catch{
	console.log('you messed up')
}
// before ES10 I had to pass an arg
try{
	4+boo;
} catch(e){
	console.log(e);
}