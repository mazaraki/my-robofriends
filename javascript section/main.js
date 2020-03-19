var a = document.getElementsByTagName('h1')[0];
a.setAttribute('class', 'coolTitle');
a=document.getElementsByClassName('second')[0];
let btn = document.getElementsByTagName('button')[0]
let input = document.getElementById('user-input');
let ul = document.querySelector('ul');


let doAlistItem = function(){
	li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	createDeleteBtn(li);
	onItemClick(li);
	input.value = '';
};

let clicked =  function(){
	if (input.value) {
		doAlistItem();
	}
};

let keypressed = function(event){
	if (input.value && 	event.which == '13') {
		doAlistItem();
	}
};

btn.addEventListener('click', clicked);

input.addEventListener('keypress', keypressed);

// solution for exercise
// @author { Dimitra aka 'boo'}
let items = document.getElementsByTagName('li');


let createDeleteBtn = function(item){
	var delText = document.createTextNode('Delete');
	var del = document.createElement('button');
	del.appendChild(delText);
	item.appendChild(del);
	del.addEventListener('click', () => {
		item.remove();
	});
};

let onItemClick = function(item){
	item.addEventListener(
		'click', () => {
			if(item.classList){
				item.classList.toggle('done');
			} else {
				// For IE
				let classes = item.className.split(' ');
				let i = classes.indexOf('done');

				if(i > -1){
					classes.splice(i, 1);
				} else {
					classes.push('done');
					item.className = classes.join(' ');
				}
			}
		}
	);
};

let actionsOnItem = function(){
	for(let item of items){
		createDeleteBtn(item);
		onItemClick(item);
	}
};

actionsOnItem();