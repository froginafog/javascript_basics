function main()
{
    var current_day = new Date().getDay();
    var output = "";
    
    switch(current_day)
    {
        case 0:
            output = output + "today is Sunday";
            break;
        case 1:
            output = output + "today is Monday";
            break;
        case 2:
            output = output + "today is Tuesday";
            break;
        case 3:
            output = output + "today is Wednesday";
            break;
        case 4:
            output = output + "today is Thursday";
            break;
        case 5:
            output = output + "today is Friday";
            break;
        case 6:
            output = output + "today is Saturday";
            break;
        default:
            output = output + "invalid day";
    }
    
    document.getElementById("p1").innerHTML = output;
}

main();

