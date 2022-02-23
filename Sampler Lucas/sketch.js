let button1;
let button2;
let button3;
let button4;
let sounds;

let reverb;
let slider;

reverb = new Tone.JCReverb({
  roomSize: 0.8,
}).toDestination();


function preload()
{

  sounds = new Tone.Players
  (
    {
      pierre: "yoPierre.mp3",
      flea: "spanishFlea.mp3",
      wilhelm: "wilhelmScream.mp3",
      metal: "doom.mp3"
    }
  ).connect(reverb);

}

function setup() 
{
  
  createCanvas(windowWidth, windowHeight);
  
  button1 = createButton('Play Pierre');
  button1.position(250, 100);
  button1.mousePressed(playSound1);
  
  button2 =createButton('Play Spanish Flea');
  button2.position(250, 200);
  button2.mousePressed(playSound2);
  
  button3 =createButton("Play Wilhelm Scream");
  button3.position(250, 300);
  button3.mousePressed(playSound3);


  button4 = createButton("Play Doom Song");
  button4.position(250, 400);
  button4.mousePressed(playSound4);


  slider = createSlider(0, 1, 0.5, 0);
  slider.style("width", "300px");
  slider.position(600, 550);

}

function draw() 
{
  
  background("Aquamarine");
  textSize(25);
  text("Reverb Level", 600, 600);

  reverb.roomSize.value = slider.value();

}

function playSound1()
{
  sounds.player("pierre").start();
}

function playSound2()
{
  sounds.player("flea").start();
}
  
function playSound3()
{
  sounds.player("wilhelm").start();
}

function playSound4()
{
  sounds.player("metal").start();
}