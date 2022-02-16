let backGroundImage, score, crawling, squished, 
gameState, time, timeStart, timerFinish, bugSquad;
let bugImages = [];
let walls = [];
let dir = [0, 90, 180, 270];
let speed = 2;


function preload()
{
  backGroundImage = loadImage("blueDirt.jpg");

  for (i = 0; i < 4; i++)
  {
    bugImages[i] = loadImage("green_" + (i + 1) + ".png");
  }
}

function setup() 
{
  createCanvas(800, 800);
  score = 0;
  timeStart = 30;
  timerFinish = false;
  gameState = "start";
  bugSquad = new Group();
  walls = new Group();

  rectMode(CENTER);
  textAlign(CENTER);
  borders();
}

function draw() 
{
  background(backGroundImage);

  if (gameState == "start")
  {
    push();
    fill("lightblue");
    rect(width / 2, height / 2, 200, 150);
    fill(0);
    text("SQUISH ALL THE BUGS\nCLICK TO BEGIN", 
    width / 2, height / 2);
    pop();
    if (mouseIsPressed)
    {
      createBugs(15);
      gameState = "play"
    }
  }
  else if(gameState == "play")
  {
    push();
    fill("red");
    textSize(15);
    textStyle(BOLD);
    stroke(255);
    text("TIME LEFT: " + (timeStart - timer() % timeStart) + 
    "\nKILLS: " + score, 50, 40);
    pop();

    if (bugSquad.length < 1)
    {
      createBugs(15);
    }
    
    timer();
    bugSquad.collide(walls, changePositionOfBug);
    bugSquad.displace(bugSquad);
    drawSprites();

    if (timerFinish == true)
    {
      gameState = "end";
    }
  }
  else if (gameState == "end")
  {
    push();
    fill("lightblue");
    rect(width / 2, height / 2, 250, 250);
    fill(0);
    text("WOW!\nYOU SQUISHED\n" + score + 
    "\nBUGS!\nCLICK TO PLAY AGAIN", width / 2, height / 2 - 50);
    pop();

    if (mouseIsPressed)
    {
      
        setup();
    }
  } 
}

function timer()
{
  time = int((millis() - timeStart) / 1000);
  if (time % timeStart == 0)
  {
    timerFinish = true;
  }
  return time;
}

function createBugs(num)
{
for (let i = 0; i < num; i++)
{

  let greenBug = createSprite(random(100, width - 100), 
  random(100, height - 100), 50, 50);
  greenBug.scale = .6;
  greenBug.isDead = false;
  greenBug.rotation = random(dir);

  if (greenBug.rotation == 0)
  {
    greenBug.setSpeed(speed, 270);
  }
  else if (greenBug.rotation == 90)
  {
    greenBug.setSpeed(speed, 0);
  }
  else if (greenBug.rotation == 180)
  {
    greenBug.setSpeed(speed, 90);
  }
  else if (greenBug.rotation == 270)
  {
    greenBug.setSpeed(speed, 180);
  }

  crawling = greenBug.addAnimation("walk", bugImages[0], bugImages[1],
  bugImages[0], bugImages[2]);
  crawling.frameDelay = 8;

  squished = greenBug.addAnimation("squish", bugImages[3]);

  greenBug.onMousePressed = function()
  {
    if (this.isDead == false)
    {
      this.changeAnimation("squish");
      this.setSpeed(0, 0);
      this.life = 100;
      score++;
      bugSquad.remove(this);
      this.isDead = true;
    }
  };
  bugSquad.add(greenBug);
}
}

function borders() 
{
  for (let i = 0; i < 4; i++) {
    let wall;
    if (i === 0) {
       wall = createSprite(width / 2, -100, 2000, 10);
    } else if (i === 1) {
     wall = createSprite(width / 2, height + 100, 2000, 10);
    } else if (i === 2) {
     wall = createSprite(-100, height / 2, 10, 2000);
    } else if (i === 3) {
     wall = createSprite(height + 100, height / 2, 10, 2000);
    }
    wall.immovable = true;
    walls.add(wall);
  }
}

function changePositionOfBug() 
{
  if (this.rotation === 90) {
    this.position.x = -50;
    this.position.y = random(20, height - 20);
  } else if (this.rotation === 270) {
    this.position.x = width + 50;
    this.position.y = random(20, height - 20);
  } else if (this.rotation === 180) {
    this.position.y = -50;
    this.position.x = random(20, width - 20);
  } else if (this.rotation === 0) {
    this.position.y = height + 50;
    this.position.x = random(20, width - 20);
  }
}
