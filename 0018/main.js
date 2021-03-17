function main()
{
    var ch = 'C';
    var output = "";
    
    switch(ch)
    {
        case 'A':
            output = output + "grade range: 90 - 100" + "<br>" + "excellent";
            break;
        case 'B':
            output = output + "grade range: 80 - 89" + "<br>" + "good";
            break;
        case 'C':
            output = output + "grade range: 70 - 79" + "<br>" + "satisfactory";
            break;
        case 'D':
        	output = output + "grade range: 60 - 69" + "<br>" + "marginal pass";
            break;
        case 'F':
            output = output + "grade range: 0 - 59" + "<br>" + "fail";
            break;
        default:
            output = output + "invalid grade";
    }
    
    document.getElementById("p1").innerHTML = output;
}

main();

