//your JS code here. If required.
const name = document.getElementById("name").value;
const age = document.getElementById("age").value;

document.getElementById("btn").addEventListener("click" , display());

function display(){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			if(age>18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 4000)
	})
}

display().then((data) => {
	alert(data);
}).catch((err) => alert(err));