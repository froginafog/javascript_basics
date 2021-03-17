document.body.style.background = "lightgreen";
document.getElementById("p1").style.background = "lightblue";
var i = 0;
var i_max = 5;
var output = "a: ";
var a = [10, 20, 30, 40, 50];

for(i = 0; i < i_max; i++)
{
	output = output + a[i] + " ";
}

document.getElementById("p1").innerHTML = output;
