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
    console.log('arr ', arr);
    
    let final = [];
    for (var i = 0; i < arr.length-1; i++) {
    	let cur = arr[i], next = arr[i+1], curA = [];//, newA;
    	if (cur != next) {
    		console.log(cur, next);
    		curA = arr.slice(0, i+1);
    		final.push(curA);
    		// console.log('final ' , final);
    		console.log('cura ', curA);
    		curA.length = 0;
    	}
    	// final.concat(curA);
    	curA.length = 0;
    }

    var c = arr.slice(0, 5);
} 
clean(a1);

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

// whenAdded([1,2,3], 4);


// DONE
// Question 3: Write a function that converts HEX to RGB. Then Make 
// that function auto-dect the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.
function hexToRgb(color){
	let c = color.replace('#', '');
	if (color.length < 6) {
		alert('please provide a value like this: \'#xxxxxx\'');
		return;
	} 
	let rgb = [];
	for (let i = 0; i < c.length; i=i+2){
		rgb.push(c[i] + c[i + 1])
	}
	let res = 'rgb(' + rgb.map(item => parseInt(item, 16)) + ')';
	console.log(res)
	return res;

}

function rgbToHex(color){
	color = color.replace(/ +/g, '');
	let rgb = color.split(',');
	let rgbMap = rgb.map(item => {
		let num = Number(item);
		let hex = num.toString(16); 
		return hex.length == 1 ? '0'+hex:hex;
	});
	let final = '#' + rgbMap.join('');
	console.log(final);
	return final;
}

function rgbToHex2(color) {
	color = color.replace(/ +/g, '');
	let rgb = color.split(',');
	let res = '#' + (((rgb[0] << 16).toString(16)) + ((rgb[1] << 8).toString(16)) 
		+ rgb[2].toString(16));
	let final = res.substring(0, res.length - 2);
	console.log(final);
	return final;
}

function change(value){
	console.log(value)
	value = String(value);
	if(value.indexOf(',') < 0) {
		hexToRgb(value);
	} else {
		rgbToHex(value);
		rgbToHex2(value);
	}
}

// change('255, 0, 0');
// change('#f34500');