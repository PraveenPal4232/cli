var my_data = [
    {
      id:0,
      data_key:"bio",
      show_data:"#FrontEnd Developer, #UI & #UX Designer,enthusiastic #webdev , and architect of my #Dreams",
    },
    {
      id:1,
      data_key:"about",
      show_data:"I'm a front-end and UI/UX developer based in New Delhi, India. I am specialised in all things HTML, CSS, and a little bit JavaScript, but passionate about all aspects of technology. I partner with design teams to execute and build beautiful, progressive Web user interfaces and design systems, with a strong focus on responsive design, performance, and accessibility, using the latest front-end design techniques.",
    },
    {
      id:2,
      data_key:"skills",
      show_data:"Html5 , Css3, Javascript, Json, Api and Progresive Web Apps.",
    },
    {
      id:3,
      data_key:"contact",
      show_data:"praveenpal4232@gmail.com",
    },
    {
      id:4,
      data_key:"social",
      show_data:"Twitter, Lindein and Facebook.",
    },
    {
      id:5,
      data_key:"quote",
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
    output.innerHTML = my_data[1].show_data;
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