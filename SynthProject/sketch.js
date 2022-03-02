
synth = new Tone.Synth(
  {
    envelope: {
      attack: 0.05,
      decay: 0.5,
      sustain: 1,
      release: 5
    }
  }).toDestination();

let notesBoard = {
  "a" : "C4",
  "s" : "D4",
  "d" : "E4",
  "f" : "F4",
  "g" : "G4",
  "h" : "A4",
  "j" : "B4",
  "k" : "C5",
}

function setup() 
{
  createCanvas(600, 600);

  attack = createSlider(0, 1, 0.5, 0.01);
  attack.position(250,300);
  decay = createSlider(0, 1, 0.5, 0.01);
  decay.position(400, 300);
  sustain = createSlider(0, 1, 0.5, 0.01);
  sustain.position(250,375);
  release = createSlider(0, 1, 0.5, 0.01);
  release.position(400, 375);

}

function draw() 
{
  background("#9FE2BF");

  textSize(24);
  fill("blue");
  text("Press keys to play notes!", 10, 30)
  fill(0);
  text("key a = note C4", 10, 70);
  text("key s = note D4", 10, 110);
  text("key d = note E4", 10, 150);
  text("key f = note F4", 10, 190);
  text("key g = note G4", 10, 230);
  text("key h = note A4", 10, 270);
  text("key j = note B4", 10, 310);
  text("key k = note C5", 10, 350);

  textSize(18);
  text("attack", 290, 290)
  synth.envelope.attack = attack.value();

  text("decay", 440, 290)
  synth.envelope.decay = decay.value();

  text("sustain", 290, 370)
  synth.envelope.sustain = sustain.value();

  text("release", 440, 370)
  synth.envelope.release = release.value();
}

function keyPressed()
{
  let play = notesBoard[key];
  synth.triggerAttackRelease(play, .3);
}