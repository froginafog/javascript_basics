function add(x,y,z)
{
    return x + y + z;
}

function main()
{
    var string_of_function;
    
    string_of_function = add.toString();  //convert the function to a string
    document.getElementById("p1").innerHTML = string_of_function;
}

main();

