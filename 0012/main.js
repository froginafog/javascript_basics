function get_output()
{
	output = output + "i: " + i + " , " + "j: " + j + "<br>";
	return output;
}

document.body.style.background = "lightblue";

var i;
var j;
var output = "";

for(i = 0; i < 3; i++)
{
	for(j = 0; j < 3; j++)
	{
		output = get_output();
	}
	output = output + "----------------------" + "<br>";
	//"<br>" means break line, which means go to the next line
}

document.getElementById("p1").innerHTML = output;
