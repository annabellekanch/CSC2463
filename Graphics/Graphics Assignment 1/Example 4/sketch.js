/* 
Annabelle Kanchirathingal
Drawing Circle + Star
*/
function setup()
{
	createCanvas(200, 200);
}

function draw()
{
	background(0, 0, 155);
	strokeWeight(3);
	stroke(255, 255, 255);
	fill(0, 130, 0);
	ellipse(100, 100, 100, 100);

	fill(255, 0, 0);
	beginShape();
	vertex(100, 48);
	vertex(85, 80);
	vertex(50, 80);
	vertex(80, 105);
	vertex(70, 137);
	vertex(100, 120);
	vertex(136, 140);
	vertex(120, 110);
	vertex(155, 80);
	vertex(115, 80);
	vertex(100, 48);
	endShape(CLOSE);
}
