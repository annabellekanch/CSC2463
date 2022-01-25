function setup() {
	createCanvas(200, 100);
}

function draw() {
	var red = 119;
	var green = 242;
	var blue = 59;
	
    background(red, green, blue);
	ellipse(50, 50, 80, 80); /* circle */
	
    var x = 110;
	var y = 10;
	var w = 80;
	var h = 80;
	
    rect(x, y, w, h); /* square */
}
