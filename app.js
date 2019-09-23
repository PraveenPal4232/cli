var my_data = [
    {
      data_key:"bio",
      show_data:"Hello World, Bio",
    },
    {
      data_key:"social",
      show_data:"Hello World, Social Data",
    },
    ];

    var kik = document.getElementsByTagName("input");
    
    kik[kik.length-1].addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {

   if(my_data.some(command => command.data_key === kik[kik.length-1].value)){
    event.preventDefault();
    console.log("Your Command is running..."+kik[kik.length-1].value);

    var output = document.createElement("p");    
    output.innerHTML = my_data[0].show_data;
    document.getElementById("playground").appendChild(output);
    next();

   }
   else{
    var output = document.createElement("p");    
    output.innerHTML = "Available commands - [about] [bio] [contact] [skills] [social] [quote] [clear]";
    document.getElementById("playground").appendChild(output);
    next();
   }
function next(){
    var output = document.createElement("input"); 
    output.setAttribute('type', 'text');
    output.placeholder = ">";
    document.getElementById("playground").appendChild(output);
}
}

});