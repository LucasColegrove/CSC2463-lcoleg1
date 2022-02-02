
let currentColor;

let red;
let orange;
let yellow;
let green;
let cyan;
let blue;
let magenta;
let brown;
let white;
let black;

function setup() 
{
  createCanvas(1000, 700);
  background(245);
  currentColor = 0;

  red = new colorSelectionBox(0, "red");
  orange = new colorSelectionBox(50, "orange");
  yellow = new colorSelectionBox(100, "yellow");
  green = new colorSelectionBox(150, "lime");
  cyan = new colorSelectionBox(200, "cyan");
  blue = new colorSelectionBox(250, "blue");
  magenta = new colorSelectionBox(300, "magenta");
  brown = new colorSelectionBox(350, "saddlebrown");
  white = new colorSelectionBox(400, "white");
  black = new colorSelectionBox(450, "black");

}


function draw() 
{
  if (mouseIsPressed)
  {
    if(mouseX > 51)
    {
      lineDrawing();
    }
  }

  red.appear();
  red.colorPresser();
  orange.appear();
  yellow.appear();
  green.appear();
  cyan.appear();
  blue.appear();
  magenta.appear();
  brown.appear();
  white.appear();
  black.appear();


}


class colorSelectionBox
{
  constructor(y, color)
  {
    this.x = 0;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.color = color;
  }

  appear()
  {
    push();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }



  colorPresser()
  {
    if (mouseIsPressed)
    {
      if (mouseX < 50)
      {
        if (mouseY > 0 && mouseY < 50)
        {
          currentColor = "red";
        }
        else if(mouseY > 50 && mouseY < 100)
        {
          currentColor = "orange";
        }
        else if(mouseY > 100 && mouseY < 150)
        {
          currentColor = "yellow";
        }
        else if(mouseY > 150 && mouseY < 200)
        {
          currentColor = "lime";
        }
        else if(mouseY > 200 && mouseY < 250)
        {
          currentColor = "cyan";
        }
        else if(mouseY > 250 && mouseY < 300)
        {
          currentColor = "blue";
        }
        else if(mouseY > 300 && mouseY < 350)
        {
          currentColor = "magenta";
        }
        else if(mouseY > 350 && mouseY < 400)
        {
          currentColor = "saddlebrown";
        }
        else if(mouseY > 400 && mouseY < 450)
        {
          currentColor = "white";
        }
        else if(mouseY > 450 && mouseY < 500)
        {
          currentColor = "black";
        }
      }
    }
  }

}

function lineDrawing()
{
  push();
  stroke(currentColor);
  strokeWeight(4);  
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();

}