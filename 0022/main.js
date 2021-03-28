var person_1 = {
					first_name: "Bob",
					last_name: "The Great",
					age: 22
		};
			   
var person_2 = {
					first_name: "Robin",
					last_name: "The Hood",
					age: 33
		};
			   
var output;   

output = "";
output = output + person_1["first_name"] + "<br>";
output = output + person_1["last_name"] + "<br>";
output = output + person_1["age"] + "<br>";
document.getElementById("p1").innerHTML = output;

output = "";
output = output + person_2["first_name"] + "<br>";
output = output + person_2["last_name"] + "<br>";
output = output + person_2["age"] + "<br>";
document.getElementById("p2").innerHTML = output;
