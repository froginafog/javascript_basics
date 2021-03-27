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
var property;

output = "";
for(property in person_1)  
{
	output = output + person_1[property] + "<br>";
}
document.getElementById("p1").innerHTML = output;

//perperty = first_name, property = last_name, property = age

output = "";
for(property in person_2)
{
	output = output + person_2[property] + "<br>"; 
}
document.getElementById("p2").innerHTML = output;

//perperty = first_name, property = last_name, property = age
