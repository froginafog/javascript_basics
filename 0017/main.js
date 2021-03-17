function main()
{
    var x;
    var output = "";
    
    x = 10;
    
    if(x < 10)
    {
        output = output + "x is less than 10";
        output = output + "<br>";
    }
    else if(x <= 10)
    {
        output = output + "x is less than or equal to 10";
        output = output + "<br>";
    }
    else if(x == 10)
    {
        output = output + "x is equal to 10";
        output = output + "<br>";
    }  
    else if(x >= 10)
    {
        output = output + "x is greater than or equal to 10";
        output = output + "<br>";
    }
    else //x > 10
    {
        output = output + "x is greater than 10";
        output = output + "<br>";
    }
    
    document.getElementById("p1").innerHTML = output;
}

main();

/*
x is less than or equal to 10
*/
