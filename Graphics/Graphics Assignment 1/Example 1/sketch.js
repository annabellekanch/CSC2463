/*
Annabelle Kanchirathingal
Drawing of a circle and square
*/

function setup() 
{
	createCanvas(200, 100);
}

function draw() 
{
	var red = 115;
	var green = 242;
	var blue = 60;

    background(red, green, blue);

    var x = 110;
	var y = 10;
	var w = 80;
	var h = 80;

	strokeWeight(1.3);
	
	ellipse(50, 50, 80, 80); 

    rect(x, y, w, h); 
}
