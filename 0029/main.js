function main()
{
	var date_object = new Date();
    var today = date_object.getDay();
    var output;
    
    switch(today)
    {
        case 0:
            output = "today is Sunday";
            break;
        case 1:
            output = "today is Monday";
            break;
        case 2:
            output = "today is Tuesday";
            break;
        case 3:
            output = "today is Wednesday";
            break;
        case 4:
            output = "today is Thursday";
            break;
        case 5:
            output = "today is Friday";  
            break;
        case 6:
            output = "today is Saturday";  
            break;
        default:
            output = "invalid day";    
    }
    
    document.getElementById("p1").innerHTML = output;
}

main();

/*
today is Thursday
*/
