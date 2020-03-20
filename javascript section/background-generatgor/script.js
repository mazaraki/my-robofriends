let css = document.querySelector('h3');
let color1 =document.querySelector('.color-1');
let color2 =document.querySelector('.color-2');
let body = document.querySelector('body');
let btn = document.querySelector('#generator');
// 1
let initialBG = getComputedStyle(body).backgroundImage;
let colorStr1 = initialBG.substring(30, 39)
	colorStr2 = initialBG.substring(46, initialBG.length-2);

let arr1 = colorStr1.split(', '), arr2 = colorStr2.split(', ');

let one = '#' +arr1.map(item => (item | 1 << 8).toString(16).slice(1));
one = one.replace(/,/g, '');
let two = '#' + arr2.map(item => (item | 1 << 8).toString(16).slice(1));
two = two.replace(/,/g, '');
color1.setAttribute('value', one);
color2.setAttribute('value', two);
// 2
css.textContent = initialBG;

let setGradient = function(){
	body.style.background = "linear-gradient(to right, " 
							+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ';';
};

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

// 3
btn.addEventListener('click', function(){
	color1.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	color2.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});