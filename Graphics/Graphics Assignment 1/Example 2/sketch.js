/*
Annabelle Kanchirathingal
Drawing of primary colors
*/

function setup() 
{
	createCanvas(200, 200);
}

function draw() 
{	
	background(255, 255, 255);
	
	//same width, height, and transparency for all ellipses
	var width = 90;
	var height = 90;
	var transparency = 90;
	noStroke();

	//RED
	var x = 90;
	var y = 60;
	var red = 255;
	var green = 0;
	var blue = 0;
	fill(red, green, blue, transparency)
	ellipse(x, y, width, height);

	//GREEN
	x = 120;
	y = 110;
	var red2 = 0;
	var green2 = 255;
	var blue2 = 0;
	fill(red2, green2, blue2, transparency)
	ellipse(x, y, width, height);
		
	//BLUE
	x = 60;
	y = 110;
	var red3= 0;
	var green3 = 0;
	var blue3 = 255;
	fill(red3, green3, blue3, transparency)
	ellipse(x, y, width, height);
	

	
}
