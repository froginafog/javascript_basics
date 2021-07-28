//What comes after double slashes is a comment.
/*What comes between slash-star and star-slash is also a comment.*/
//To run this program, open the "index.html" file with a web browser.

var x1;
var x2;

x1 = 10;
x2 = 5;

sum = x1 + x2;
difference = x1 - x2;
product = x1 * x2;
quotient = x1 / x2;
remainder = x1 % x2;  //10 % 5 = 0 because 10 / 5 = 2 with no remainder left

document.body.getElementsByTagName("h1")[0].innerHTML = "Addition";  
document.body.getElementsByTagName("p")[0].innerHTML = "x1 + x2 = " + x1 + " + " + x2 + " = " + sum;

document.body.getElementsByTagName("h1")[1].innerHTML = "Subtraction";
document.body.getElementsByTagName("p")[1].innerHTML = "x1 - x2: = " + x1 + " - " + x2 + " = " + difference;

document.body.getElementsByTagName("h1")[2].innerHTML = "Multiplication";
document.body.getElementsByTagName("p")[2].innerHTML = "x1 * x2: = " + x1 + " * " + x2 + " = " + product;

document.body.getElementsByTagName("h1")[3].innerHTML = "Division";
document.body.getElementsByTagName("p")[3].innerHTML = "x1 / x2: = " + x1 + " / " + x2 + " = " + quotient;

document.body.getElementsByTagName("h1")[4].innerHTML = "Remainder";
document.body.getElementsByTagName("p")[4].innerHTML = "x1 % x2: = " + x1 + " % " + x2 + " = " + remainder;

document.body.style.background = "lightblue";  
document.body.style.color = "purple";  
