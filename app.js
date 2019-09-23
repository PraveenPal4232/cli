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

    function run_task(){
      console.log("Your camand is runing");
    }
    var kik = document.getElementsByClassName("get_data");
    
    kik[kik.length-1].addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {

   if(my_data.some(command => command.data_key === kik[kik.length-1].value)){
    event.preventDefault();
    console.log("Your Command is running..."+kik[kik.length-1].value);

    var output = document.createElement("p");    
    output.innerHTML = my_data[0].show_data;
    document.getElementById("playground").appendChild(output);

   }
   else{
    console.log("Your Command is not running..."+kik[kik.length-1].value);
   }
}
});