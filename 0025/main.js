var num_rows = 2;
var num_columns = 3;
var i;
var j;
var matrix = []

//create an empty matrix by pushing empty arrays into the matrix
for(i = 0; i < num_rows; i++)
{
	matrix.push(new Array(num_columns));  //push an array into the matrix
}

//assign the values 1 to 9 to the matrix
var n = 1;
for(i = 0; i < num_rows; i++)
{
	for(j = 0; j < num_columns; j++)
	{
		matrix[i][j] = n;
		n++;
	}
}

//build the output string with the elements of the matrix
var output = "";
for(i = 0; i < num_rows; i++)
{
	for(j = 0; j < num_columns; j++)
	{
		output = output + matrix[i][j];
	}
	output = output + "<br>";
}

//print the elements of the matrix on the webpage
document.getElementById("p1").innerHTML = output;
