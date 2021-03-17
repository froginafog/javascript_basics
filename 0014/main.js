function add(x1, x2)
{
	var result = x1 + x2;
	return result;
}

function subtract(x1, x2)
{
	var result = x1 - x2;
	return result;
}

function multiply(x1, x2)
{
	var result = x1 * x2;
	return result;
}

function divide(x1, x2)
{
	var result = x1 / x2;
	return result;
}

document.body.style.background = "silver";

document.getElementById("p1").style.color = "green";
document.getElementById("p1").innerHTML = "10 + 5 = " + add(10, 5);

document.getElementById("p2").style.color  = "purple";
document.getElementById("p2").innerHTML = "10 - 5 = " + subtract(10, 5);

document.getElementById("p3").style.color  = "blue";
document.getElementById("p3").innerHTML = "10 * 5 = " + multiply(10, 5);

document.getElementById("p4").style.color  = "red";
document.getElementById("p4").innerHTML = "10 / 5 = " + divide(10, 5);
