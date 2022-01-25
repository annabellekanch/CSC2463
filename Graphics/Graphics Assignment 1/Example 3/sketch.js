/*
Annabelle Kanchirathingal
Drawing of Pac-Man & Ghost
*/

function setup() 
{
	angleMode(DEGREES);
	createCanvas(300, 200); 
	background("black");
}

function draw()
{
	noStroke();

	fill("yellow");
	arc(100, 100, 50, 50, 225, 135); 

	fill("red");
	rect(150, 100, 50, 25); 
	ellipse(175, 100, 50, 50); 

	fill("white");
	ellipse(165, 95, 15, 15);
	ellipse(185, 95, 15, 15);

	fill("blue");
	ellipse(165, 95, 9, 9);
  	ellipse(185, 95, 9, 9);
}
