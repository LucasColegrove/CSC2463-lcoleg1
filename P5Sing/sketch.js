
let synthesizer, backgroundSeq, splatNoise;
let bgMelody = ["C3", ["E3", "G3", "D3", "C3"], "A3", "B2", "C2", "E3", 
["A2", "G2"], "C4"];


let brushColor = "black";
let palletColor = ["red", "orange", "yellow", "green", "blue", 
"purple", "brown", "gray", "black", "white"];

function preload()
{
  splatNoise = new Tone.Player("mudSplatSound.wav").toMaster();
  resetNoise = new Tone.Player("paperSound.wav").toMaster();
  pencilNoise = new Tone.Player("pencilSound.mp3").toMaster();
}

function setup() 
{
  createCanvas(800, 650);
  background(245);


  button = createButton('Reset');
  button.position(0, 600);
  button.mousePressed(resetFunction);



  synthesizer = new Tone.Synth({
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.05,
      decay: 1.5,
      sustain: 0.1,
      release: 5
    },
    resonance: 0.9,
  }).toMaster();

  backgroundSeq = new Tone.Sequence(function(time, note) {
    synthesizer.triggerAttackRelease(note, 0.5);
    console.log(note);
  }, bgMelody, "4n");

  Tone.Transport.bpm.value = 80;
  Tone.Transport.loop = false;
  Tone.Transport.loopStart = 0;
  Tone.Transport.loopEnd = "2:0:0";
  Tone.Transport.start();

  bgMusic();
}

function draw() 
{
     for (let i = 0; i < 10; i++)
     {
       fill(palletColor[i])
       stroke("black");
       rect(0, (i * 57), 57, 57);
     }

  if (mouseIsPressed && mouseX >= 65 && mouseY < windowHeight - 70)
  {
    stroke(brushColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  strokeWeight = 30;
}

function bgMusic()
{
  backgroundSeq.start();
}

function mousePressed()
{
  if(mouseX < 57 && mouseY < 600)
  {
    splatNoise.start();
  }else if (mouseX > 57)
    pencilNoise.start();

  if (mouseIsPressed == true && mouseX < 57 && mouseY < 57)
  {
    brushColor = "red";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 114)
  {
    brushColor = "orange";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 171)
  {
    brushColor = "yellow";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 228)
  {
    brushColor = "green";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 285)
  {
    brushColor = "blue";
  }  
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 342)
  {
    brushColor = "purple";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 399)
  {
    brushColor = "brown";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 456)
  {
    brushColor = "gray";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 513)
  {
    brushColor = "black";
  }
  else if (mouseIsPressed == true && mouseX < 57 && mouseY < 570)
  {
    brushColor = "white";
  }

}

function resetFunction()
{
  resetNoise.start();
  setup();
  backgroundSeq.stop();
}