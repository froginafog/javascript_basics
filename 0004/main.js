//What comes after double slashes is a comment.
/*What comes between slash-star and star-slash is also a comment.*/
//To run this program, open the "index.html" file with a web browser.

var message_1 = "Hello Frog";
var message_2 = "Bye Frog";
var message_3 = "Hello Bob";
var message_4 = "Bye Bob";

document.body.getElementsByTagName("h1")[0].innerHTML = message_1;  
document.body.getElementsByTagName("p")[0].innerHTML = message_2;
document.body.getElementsByTagName("h1")[1].innerHTML = message_3;
document.body.getElementsByTagName("p")[1].innerHTML = message_4 ;

document.body.style.background = "lightblue";  //set the background color to lightblue
document.body.style.color = "purple";  //set the text color to purple
