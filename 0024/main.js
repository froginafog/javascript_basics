function main()
{
    var person1 = {
                    first_name: "Bob",
                    last_name: "The Great",
                    id: "B123",
                    get_info: function()
                              {
                                 return this.first_name + " " + this.last_name + " " + this.id;    
                              }
                  };
    
    var person2 = {
                    first_name: "Robin",
                    last_name: "The Hood",
                    id: "R321",
                    get_info: function()
                              {
                                 return this.first_name + " " + this.last_name + " " + this.id;    
                              }
                  };
    
    var output;
    
    output = "person1: " + person1.get_info() + "\n"
             + "person2: " + person2.get_info() + "\n";
    
    console.log(output);
}

main();

/*
person1: Bob The Great B123
person2: Robin The Hood R321
*/