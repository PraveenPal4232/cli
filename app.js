var my_data = [
    {
      id:0,
      data_key:"about",
      show_data:"I’m front-end and UI/UX developer based in New Delhi.",
    },
    {
      id:1,
      data_key:"bio",
      show_data:"#FrontEnd Developer, #UI & #UX Designer,enthusiastic #webdev , and architect of my #Dreams",
    },
    {
      id:2,
      data_key:"contact",
      show_data:"Hello World, Social Data",
    },
    {
      id:1,
      data_key:"social",
      show_data:"Hello World, Social Data",
    },
    {
      id:1,
      data_key:"social",
      show_data:"Hello World, Social Data",
    },
    {
      id:1,
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
    output.innerHTML = my_data[command.data_key].show_data;
    document.getElementById("playground").appendChild(output);
    next();

   }
   else{
    console.log("Your Command is not running..."+kik[kik.length-1].value);
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
    var kik = document.getElementsByTagName("input");
}
}

});