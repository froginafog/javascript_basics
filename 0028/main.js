add_message = (s1, s2) => s1 + " " + s2;

function main()
{
    var message1;
    var message2;
    var output;
    
    message1 = "To JS or not to JS.";
    message2 = "That is the dilemma.";
    output = add_message(message1, message2);
    document.getElementById("p1").innerHTML = output;
}

main();

/*
To JS or not to JS.
That is the dilemma.
*/
