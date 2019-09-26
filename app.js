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
      show_data:[
        "Failure is simply the opportunity to begin again, this time more intelligently.",
        "A person who never made a mistake never tried anything new.",
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        "Kindness is the language which the deaf can hear and the blind can see.",
        "With or without religion, you would have good people doing good things and evil people doing evil things. But for good people to do evil things, that takes religion.",
        "Positive thinking will let you do everything better than negative thinking will.",
        "You have enemies? Good. That means you’ve stood up for something, sometime in your life.",
        "You've been living in a dream world, Neo.",
        "What is \"real\"? How do you define \"real\"?",
        "Welcome to the real world.",
        "Because you have been down there Neo, you know that road, you know exactly where it ends. And I know that's not where you want to be.",
        "A déjà vu is usually a glitch in the Matrix. It happens when they change something.",
        "Do you believe that my being stronger or faster has anything to do with my muscles in this place? Do you think that's air you're breathing now?",
        "Neo: I know kung fu. \nMorpheus: [eyeing him, hand on chin] Show me.",
        "Trinity: Neo... nobody has ever done this before. \nNeo: That's why it's going to work.",
        "Neo: I thought it wasn't real. \nMorpheus: Your mind makes it real.",
        "The answer is out there, Neo, and it's looking for you, and it will find you if you want it to.",
        "So what do you need? Besides a miracle.",
        "I can only show you the door. You're the one that has to walk through it.",
        "Morpheus: [to Neo who is choosing the red pill] Remember... all I'm offering is the truth. Nothing more."
      ],
    },
    {
      id:6,
      data_key:"clear",
      show_data:"Are you sure?",
    },
    ];

    list_command = ["bio","about","skills","contact","social","quote","clear"];
    function lool(){
    if (event.keyCode === 13) {
    var boom = document.getElementById("playground").lastElementChild;
    if( list_command.includes(boom.value) == true){
      var key = list_command.indexOf(boom.value);
      run_command();
    }
    else{
      no_run_command();
    }
   }
  
   function run_command(){
    console.log("Your Command is running..."+boom.value);
    var output = document.createElement("p");    
    output.innerHTML = my_data[key].show_data;
    document.getElementById("playground").appendChild(output);
    next();
   }

   function no_run_command(){
    console.log("No Command is running..."+boom.value);
    var output = document.createElement("p");    
    output.innerHTML = "Sorry Error";
    document.getElementById("playground").appendChild(output);
    next();
   }

    function next(){
    var output = document.createElement("input"); 
    output.setAttribute('type', 'text');
    output.placeholder = ">";
    output.onkeydown = "lol()";
    document.getElementById("playground").appendChild(output);
  }
}