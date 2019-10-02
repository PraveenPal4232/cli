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
        "Once you replace negative thoughts with positive ones, you’ll start having positive results.",
        "You build on failure. You use it as a stepping stone. Close the door on the past. You don’t try to forget the mistakes, but you don’t dwell on it. You don’t let it have any of your energy, or any of your time, or any of your space.”",
        "When obstacles arise, you change your direction to reach your goal; you do not change your decision to get there.",
        "People must learn to hate. And if they can learn to hate, they can be taught to love.",
        "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        "Spend your free time the way you like, not the way you think you’re supposed to.",
        "Expect the best. Prepare for the worst. Capitalize on what comes.",
        "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. He does not set out to be a leader, but becomes one by the equality of his actions and the integrity of his intent.",
        "Life doesn’t run away from nobody. Life runs at people.",
        "In order to succeed, your desire for success should be greater than your fear of failure.",
        "Too many of us are not living our dreams because we are living our fears.",
        "If the only prayer you ever say in your entire life is ‘Thank you!’, it will be enough.",
        "A man must be big enough to admit his mistakes, smart enough to profit from them and strong enough to correct them.",
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "Failure is not the opposite of success. It’s part of success.",
        "No one has ever become poor by giving.",
        "No matter what people tell you, words and ideas can change the world.",
        "Those who dare to fail miserably can achieve greatly.",
      ],
    },
    {
      id:6,
      data_key:"clear",
      show_data:"Are you sure?",
    },
    {
      id:7,
      data_key:"help",
      show_data:"Available commands - [about] [bio] [contact] [skills] [social] [quote] [clear]",
    },
    ];

var play = document.getElementById("playground");
var player = document.getElementById("player");
var key;

player.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log("Running Command...");
    chacker();
  }
});

function chacker(){
    for(i=0; i<my_data.length; i++){
      if ( player.value == my_data[i].data_key){
      key = i;
      if (player.value == my_data[6]){
        clear();
      }
      else if(player.value == my_data[5]){
        quote();
      }
      else{
        true_command();
      }
      break;
    }
    else{
      if( i == my_data.length-1){
        false_command();
      }
    }
  }
}

function true_command(){
  var output = document.createElement("p");
  output.innerHTML = my_data[key].show_data;
  play.insertBefore(output,player);
  player.value = "";
}

function false_command(){
  var output = document.createElement("p");
  output.innerHTML = my_data[7].show_data;
  play.insertBefore(output,player);
  player.value = "";
}

function clear(){
  console.log("clear is running...");
}

function quote(){
  my_data[key].show_data[Math.floor(Math.random() * 24)]
}