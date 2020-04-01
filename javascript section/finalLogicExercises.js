// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from 
// number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const a1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
function clean(arr){
    arr.sort((a, b) => a - b);
    let my = []; let rar = [];
    for (let i = 0; i < arr.length - 1; i++) {
    	if (arr[i] === arr[i+1]) {
    		my.push(arr[i]);
    		my.push(arr[i+1]);
    		console.log(my)
    	} else {
    		console.log('-----', arr[i], arr[i+1]);
    		rar = rar.concat(...my);
    		console.log(my, rar);
    		my.length = 0;
    	}
    	// rar.concat(my);
    	// console.log('rar inside ', rar) 
    	
    }
//     console.log('my', my);
//     console.log('rar', my);
} //
// clean(a1);

// DONE
// Question 2: Write a javascript function that takes an array of 
// numbers and a target number. The function should find two different 
// numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]
function whenAdded(arr, target){
	for (var i = 0; i < arr.length ; i++) 
		for (var k = 1; k <= arr.length; k++) 
			if ((arr[i] + arr[k]) == target) console.log(`[${arr[i]}, ${arr[k]}]`);
}

whenAdded([1,2,3], 4);


// Question 3: Write a function that converts HEX to RGB. Then Make 
// that function auto-dect the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.
function hexToRgb(color){

}

function rgbToHex(color){
	console.log( 0, 51, 255)
	// color()
}

function change(value){
	if(value.contains('#')) hexToRgb(value);
	else rgbToHex(value);
}