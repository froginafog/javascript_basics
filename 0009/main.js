document.body.style.background = "lightgreen";
document.getElementById("p1").style.background = "lightblue";
var i = 0;
var i_max = 5;
var output = "sum: ";
var a = [1, 2, 3, 4, 5];
var sum = 0;

for(i = 0; i < i_max - 1; i++)
{
	output = output + "a[" + i + "]" + " + ";
	sum = sum + a[i];
}

output = output + "a[" + i + "]" + " = ";

for(i = 0; i < i_max - 1; i++)
{
	output = output + a[i] + " + ";
	sum = sum + a[i];
}
output = output + a[i];
output = output + " = " + sum;
document.getElementById("p1").innerHTML = output;
