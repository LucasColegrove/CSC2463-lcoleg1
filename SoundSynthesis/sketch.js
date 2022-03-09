let twinkleMelody, simpSynth, img;
let melody = ["C3", "C3", "G3", "G3", "A3", "A3", "G3", "C3"]; 


function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);

    simpSynth = new Tone.Synth({
    oscillator: {
      type: "square" 
    },
    envelope: { 
      attack: 0.04,
      decay: 0.3,
      sustain: 1,
      release: 4
    }
  }).toMaster(); 


  twinkleMelody = new Tone.Sequence(function(time, note) { 
    simpSynth.triggerAttackRelease(note, 0.5);
    console.log(note);
  }, melody, '4n'); 

  Tone.Transport.bpm.value = 75; 
  Tone.Transport.start(); 
  Tone.Transport.loop = true; 
  Tone.Transport.loopStart = 0; 
  Tone.Transport.loopEnd = '2:0:0';
}

function draw() {
  background(150);
 textAlign(CENTER);
  image(img, 0, 0);
  fill("red");
  textSize(20);
  text("Press ENTER to play sequence", width / 2, 300);
}

function keyPressed() {
  if (keyCode == ENTER)
  {
    twinkleMelody.start();
  }
}

function preload()
{
  img = loadImage('nightsky.png');
}