function say_hello(call_back_function)
{
	document.getElementById("p1").innerHTML = "hello";
	call_back_function(say_bye);  //here call_back_function() refers to print_menu()
}

function print_menu(call_back_function)
{
	document.getElementById("p2").innerHTML = "burger, fries, salad, drink";
	call_back_function();  //here call_back_function() refers to say_bye()
}

function say_bye()
{
	document.getElementById("p3").innerHTML = "bye";
}

say_hello(print_menu);
