let spriteSheet;
let spriteSheet2;
let spriteSheet3;
let character = [];
let count = 10;


function preload()
{
  spriteSheet = loadImage("SpelunkyGuy.png")
  spriteSheet2 = loadImage("Green.png")
  spriteSheet3 = loadImage("Red.png")
}


function setup() 
{
  createCanvas(800, 800);
  imageMode(CENTER);

  for (i = 0; i < count; i++)
  {
    character[i] = new Character(random([spriteSheet, spriteSheet2, spriteSheet3]), random(50, 700), random(50, 700));
  }
}


function keyPressed()
{
  if (keyCode == RIGHT_ARROW)
  {
    for (i = 0; i < count; i++)
    {
      character[i].go(1);
    }
  }
  else if (keyCode == LEFT_ARROW)
  {
    for (i = 0; i < count; i++)
    {
      character[i].go(-1);
    }
  }
}

function keyReleased()
{
  for (i = 0; i < count; i++)
  {
    character[i].stop();
  }
}

function draw() 
{
  background(220);

  for (i = 0; i < count; i++)
  {
    character[i].draw();
  }
  
}


class Character
{
  constructor(spriteSheet, x, y)
  {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x, this.y = y;
    this.move = 0;
    this.facing = 1;
  }

  draw()
  {
    push();

    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0)
    {
      image(this.spriteSheet, 0, 0, 100, 100, 0, 0, 80, 80);
    }
    else
    {
      image(this.spriteSheet, 0, 0, 100, 100, 80 * (this.sx + 1), 0, 80, 80);
    }
  
    if (frameCount % 5 == 0)
    {
      this.sx = (this.sx + 1) % 8;
    }

    this.x += 2 * this.move;
    
    pop();
  }

  go(direction)
  {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop()
  {
    this.move = 0;
  }
  
  
}