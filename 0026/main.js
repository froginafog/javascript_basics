print_message_to_paragraph_1 = function()
{
    document.getElementById("p1").innerHTML = "Hello Frog";
}

print_message_to_paragraph_2 = function()
{
    document.getElementById("p2").innerHTML = "Bye Frog";
}

function main()
{
    print_message_to_paragraph_1();
    print_message_to_paragraph_2();
}

main();

