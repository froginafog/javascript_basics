document.body.style.background = "lightgreen";
document.getElementById("p1").style.background = "lightblue";
var i = 0;
var i_max = 5;
var output = "";
var a = [1, 2, 3, 4, 5];
var b = [10, 20, 30, 40, 50];
var sum = [0, 0, 0, 0, 0];

output = output + "a + b = [";

for(i = 0; i < i_max - 1; i++)
{
	output = output + "a[" + i + "]" + " + " + "b[" + i + "] , ";
	sum[i] = a[i] + b[i];
}

sum[i] = a[i] + b[i];
output = output + "a[" + i + "]" + " + " + "b[" + i + "]";
output = output + "] = [";

for(i = 0; i < i_max - 1; i++)
{
	output = output + a[i] + " + " + b[i] + " , ";
}

output = output + a[i] + " + " + b[i];
output = output + "] = [";

for(i = 0; i < i_max - 1; i++)
{
	output = output + sum[i] + " , ";
}

output = output + sum[i] + "]";
document.getElementById("p1").innerHTML = output;
