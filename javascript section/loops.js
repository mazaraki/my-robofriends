var todos = ['clean room', 'brush teeth', 'study js', 'do pilates'];

var len = todos.length;
for (var i = 0; i < len; i++){
	todos[i]+= '!';	
	console.log(todos[i]);
	// todos.pop();
}

todos.forEach((item, idx) =>{ console.log(item + ' ' + idx); });
console.log(todos)
// var counter = 10;
// while(counter > 10){
// 	console.log(counter);
// 	counter--;
// }

// do{
// 	console.log(counter);
// 	counter++;
// } while(counter <= 10);

// var c = 10;
// do	{
// 	console.log(c);
// 	c--;
// } while(c > 10);