document.body.style.background = "navy";

var colors = ["red", "yellow", "lightgreen"];
var output = "";
var matrix = [[11, 12, 13],
              [21, 22, 23],
              [31, 32, 33]];  
var i;
var j;

for(i = 0; i < 3; i++)
{
	for(j = 0; j < 3; j++)
	{
		output = output + matrix[i][j] + " ";
	}
	document.getElementsByTagName("p")[i].style.color = colors[i];
	document.getElementsByTagName("p")[i].innerHTML = output;
	output = "";
}

