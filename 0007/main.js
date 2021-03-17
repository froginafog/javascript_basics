document.body.style.background = "lightgreen";
document.getElementById("p1").style.background = "lightblue";
var i = 0;
var i_max = 5;
var output = "i: ";
for(i = 0; i < i_max; i++)
{
	output = output + i + " ";
	document.getElementById("p1").innerHTML = output;
}
