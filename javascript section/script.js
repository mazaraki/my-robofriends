var db = [
	{
		username: "boo",
		password: "secret"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "Edgar",
		password: "777"
	}

];

var newsfeed = [
	{
		username: "George",
		timeline: "Practising"
	},
	{
		username: "Sigurd",
		timeline: "I will be coming for you"
	}
]; 

var userName = prompt('What \'s your username?');
var pwdPrompt = prompt('What \'s your password?');

function isUserValid(username, password){
	for(var i = 0; i < db.length; i++) {
		if (db[i].username === username && db[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	// console.log(isUserValid(user, pass))
	if (isUserValid(user, pass)) {
		console.log(newsfeed)
	} else {
		alert('Sorry, wrong username and password!')
	}
	
}

signIn(userName, pwdPrompt);